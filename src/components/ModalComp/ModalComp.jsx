import React from 'react';

const ModalComp = () => {
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Один вопросик:)</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Уверены, что хотите удалить элемент?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Нет
            </button>
            <button type="button" class="btn btn-primary">
              Да
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalComp;
