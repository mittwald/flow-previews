import{j as r}from"./iframe--ZPVLz8g.js";import{M as o}from"./MarkdownEditor-BwZ3GsDV.js";import{L as v}from"./Label-CEhk5YLt.js";import{F as B}from"./FieldError-D2ZL0CC8.js";import{u as I,F as y,a as z}from"./Form-C4Q336nW.js";import{B as V}from"./Button-ipeD2xQq.js";import"./Markdown-B48sPP2Q.js";import"./CodeBlock-CK2z-Unt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BlHJKmEB.js";import"./IconWarning-4_E3WNTs.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./Tooltip-BwkNmTJG.js";import"./utils-CjuahFs2.js";import"./OverlayArrow-BrvbOkZ-.js";import"./useFocus-BI6mVvV1.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./context-CYq-vfev.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CTCa-DaJ.js";import"./useFocusable-CySdtwHN.js";import"./useFocusRing-CQfGGNBr.js";import"./react-children-utilities-B7s4o7hn.js";import"./Action-B8fzCGcN.js";import"./context-BCg0Ekp8.js";import"./useStatic-IQie-ZqP.js";import"./browser-D6_kvesK.js";import"./getActionGroupSlot-CF1hG1RQ.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./Heading-ChU8ySRU.js";import"./Heading-CDhBsMWB.js";import"./RSPContexts-4UEDZgUk.js";import"./InlineCode-BmutwZpC.js";import"./Link-BYPftkUF.js";import"./usePress-BT12SUT-.js";import"./Separator-Dt2_dReG.js";import"./Separator-BUnYRuL5.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Text-BWChA6Qp.js";import"./EmulatedBoldText-Qqp8fG5V.js";import"./Text-du_1NL-y.js";import"./TextArea-Cbb-ANAu.js";import"./TextFieldBase-Cn-O1K8l.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CeJeSW2L.js";import"./TextField-BusVcIbT.js";import"./FieldError-jq5pvDUD.js";import"./Form-CzoyYLrP.js";import"./Group-CTVEw3FJ.js";import"./useTextField-DLQgkNBY.js";import"./useFormReset-B3ZybcNU.js";import"./ReactAriaControlledValueFix-D0soGR-L.js";import"./LoadingSpinner-DOWHWybS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-nXFtpqu6.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
