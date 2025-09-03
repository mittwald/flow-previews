import{j as r}from"./iframe-BPnb-8PC.js";import{M as o}from"./MarkdownEditor-C90U6OLj.js";import{L as W}from"./Label-bLTq-ewh.js";import{F as B}from"./FieldError-hQRdtdq8.js";import{u as I,F as y,a as z}from"./Form-B1foVCQX.js";import{B as V}from"./Button-chDOhf6m.js";import"./Markdown-B32cFWih.js";import"./CodeBlock-DBUbVZR8.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cgg8S4RK.js";import"./IconWarning-j0MoznR6.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./Tooltip-DtQJ_V0x.js";import"./utils-BNZdeyCH.js";import"./OverlayArrow-DddHfoXR.js";import"./useFocus-CQt3VlDx.js";import"./ProgressBar-C4vCg6TA.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Mae_nSQP.js";import"./context-Cvzu1MDH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BZWp4i98.js";import"./useFocusable-DW9GZi2B.js";import"./useFocusRing-uXaHHV-0.js";import"./react-children-utilities-D_AxOw8m.js";import"./Action-Bmubu_cL.js";import"./context-DmMltsbs.js";import"./useStatic-2pKXc1Kg.js";import"./browser-tQ-t1xxT.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./Heading-DZGjjTVb.js";import"./Heading-BpH7y_My.js";import"./RSPContexts-2Y1bGEeq.js";import"./InlineCode-CmsYeHpz.js";import"./Link-Dz5NnzvA.js";import"./usePress-DbV6qfru.js";import"./Separator-BoCBbgrV.js";import"./Separator-ACF8I6Sm.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Text-Ba-uZw6F.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./Text-KWqvWgwT.js";import"./TextArea-CkQq5Jxu.js";import"./TextFieldBase-BBZplfvk.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CGFQo9BV.js";import"./TextField-DLL4ZGuM.js";import"./FieldError-Dg8qbhsB.js";import"./Form-CLKe_oCF.js";import"./Group-BfJL9-FJ.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./ReactAriaControlledValueFix-cCDZWueK.js";import"./LoadingSpinner-BUt2pcHy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DWahSmPc.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
