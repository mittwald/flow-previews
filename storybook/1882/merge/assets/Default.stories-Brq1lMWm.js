import{j as r}from"./iframe-B5f77The.js";import{M as o}from"./MarkdownEditor-Cfkrf9XC.js";import{L as W}from"./Label-JDxcagIb.js";import{F as B}from"./FieldError-BWiO3RtC.js";import{u as I,F as y,a as z}from"./Form-BK7x_v0I.js";import{B as V}from"./Button-C6w7hggk.js";import"./Markdown-CwZaGiqY.js";import"./CodeBlock-C9EqE2GK.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DbD4SV2L.js";import"./IconWarning-ljKjKfGj.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./Tooltip-DgwaVoab.js";import"./utils-DeVL3yHt.js";import"./OverlayArrow-DxI9FzZ3.js";import"./useFocus-CpnAUhj6.js";import"./ProgressBar-roFwkZNY.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZo659VM.js";import"./context-CDDYAalq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BsCYAcFS.js";import"./useFocusable-DVnwojtz.js";import"./useFocusRing-Dpk-O9NQ.js";import"./react-children-utilities-BLFVrISE.js";import"./Action-DGsiT_W5.js";import"./context-CKo78_m4.js";import"./useStatic-L57Eul26.js";import"./browser-DNIKTkzv.js";import"./getActionGroupSlot-BG28dPQB.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./Heading-CY5HzgY3.js";import"./Heading-CZmRCKf6.js";import"./RSPContexts-B32A1VhO.js";import"./InlineCode-CA0qb-Ep.js";import"./Link-BqoYVK93.js";import"./usePress-C1oGQ4tq.js";import"./Separator-MWHurItW.js";import"./Separator-CP2Hv3YB.js";import"./CollectionBuilder-IT3s11YO.js";import"./Text-C70_tpAy.js";import"./EmulatedBoldText-D73guLBi.js";import"./Text-CRBsFpfB.js";import"./TextArea-eHPArQDB.js";import"./TextFieldBase-DL8KSJ2-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-tYYsQmnT.js";import"./TextField-DLnVqMvq.js";import"./FieldError-CmSoGLTN.js";import"./Form-COFPxk6e.js";import"./Group-cw_ccGJA.js";import"./useTextField-DOFOnMON.js";import"./useFormReset-CoVNXXZK.js";import"./ReactAriaControlledValueFix-C9YRFpeE.js";import"./LoadingSpinner-CEnOuMOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ8WzA2D.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,S,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,C,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,_,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: "Hello!"
      }
    });
    return <Form form={form} onSubmit={async v => action(v.message)}>
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
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Gr as default};
