import{j as r}from"./iframe-Coh3lrZj.js";import{M as o}from"./MarkdownEditor-D_UDMhZn.js";import{L as v}from"./Label-K_XjE_tx.js";import{F as B}from"./FieldError-BUIbxk7v.js";import{u as I,F as y,a as z}from"./Form-DkJKFIVl.js";import{B as V}from"./Button-D5EdJ83A.js";import"./Markdown-Dchox68f.js";import"./CodeBlock-B3UrOvEa.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D_f-iy8l.js";import"./IconWarning-B1v1dgwn.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./Tooltip-BA4p6kL4.js";import"./utils-CN3w8kPq.js";import"./OverlayArrow-qlVhoYin.js";import"./useFocus-DOmsUoiU.js";import"./ProgressBar-CHLkYv72.js";import"./Label-YsAq_uoV.js";import"./Hidden-DOaFp58p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BKRPYz_q.js";import"./context-BpLwYJWu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C1ksr8rK.js";import"./useFocusable-D2foM-gB.js";import"./useFocusRing-Bz5xuAjx.js";import"./react-children-utilities-DcUZPBOl.js";import"./Action-BPx-Vljf.js";import"./context-B447f_pA.js";import"./useStatic-BT-23i_z.js";import"./browser-8tAA8o9s.js";import"./getActionGroupSlot-BtRAHx2-.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./Heading-CjR_hpRo.js";import"./Heading-BemNadj6.js";import"./RSPContexts-C359HXMi.js";import"./InlineCode-Crz8DKva.js";import"./Link-CQySlvwc.js";import"./usePress-BU16hmOe.js";import"./Separator-BN1aFznE.js";import"./Separator-CwGjgvWm.js";import"./CollectionBuilder-CwtIJ2gd.js";import"./Text-CXTmOKkL.js";import"./EmulatedBoldText-CrQvx5NB.js";import"./Text-C-iBrm51.js";import"./TextArea-DypgA8kV.js";import"./TextFieldBase-P7s9uemG.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C5sbRWI1.js";import"./TextField-DmB3C__1.js";import"./FieldError-CZajLekn.js";import"./Form-C7dJ7ChK.js";import"./Group-O8MFP4r0.js";import"./useTextField-DgBLYHiF.js";import"./useFormReset-0zxdLi8h.js";import"./ReactAriaControlledValueFix-CfODHPbD.js";import"./LoadingSpinner-CX_uswsf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-cLSaMy5d.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var w,E,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,j,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var C,k,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var _,D,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Hr as default};
