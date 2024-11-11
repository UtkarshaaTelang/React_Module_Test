import GroupnameIcon from '../GroupnameIcon';
import './LeftSection.css'
import { FaPlus } from "react-icons/fa6";

const LeftSection = ({ setOpenModal, groups, selectedGroup, setSelectedGroup }) => {

    return (
        <div className='lsBox'>
            <p className="title">Pocket Notes</p>
            <div className="groupList">
                {groups.map((group, index) => {
                    return (
                        <div
                            className="groupItem"
                            key={index}
                            style={{
                                backgroundColor: selectedGroup === group ? '#DCDCDC' : '#fff',
                            }}
                            onClick={() => setSelectedGroup(group)}
                        >
                            <span className='groupIcon' style={{ backgroundColor: group.color }}>
                                <span className="Icon">
                                    <GroupnameIcon groupName={group.groupName} />
                                </span>
                            </span>
                            <h2 className='groupName'>{group.groupName}</h2>
                        </div>
                    )
                })}
            </div>
            <button
                className="addBtn"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus />
            </button>
        </div>
    )
}

export default LeftSection;