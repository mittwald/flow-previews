import{j as r}from"./iframe-BuQIW6_u.js";import{M as o}from"./MarkdownEditor-DdFKcIdu.js";import{L as v}from"./Label-_oW49-Il.js";import{F as B}from"./FieldError-Jn80i9Ms.js";import{u as I,F as y,a as z}from"./Form-BULXkxDJ.js";import{B as V}from"./Button-DlXaalMD.js";import"./Markdown-CPTIKOBh.js";import"./CodeBlock-FJlGT903.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DKF2_szn.js";import"./IconWarning-CTHW-5ya.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./Tooltip-D42lrBvI.js";import"./utils-C3-2IFIX.js";import"./OverlayArrow-BFcQ4aC2.js";import"./useFocus-CJRfh2Zc.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-V7qiuXiw.js";import"./context-DHpT4jQ7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DeMfvYEX.js";import"./useFocusable-5iT1iM-_.js";import"./useFocusRing-DhNL4Zu8.js";import"./react-children-utilities-CbfZ8OFk.js";import"./Action-NQcD1SkN.js";import"./context-nH1y_ndl.js";import"./useStatic-Cs9s3jvC.js";import"./browser-DTjbbqmr.js";import"./getActionGroupSlot-DeOL7iYR.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./Heading-CT_713bG.js";import"./Heading-B-jFBTau.js";import"./RSPContexts-CueUa63T.js";import"./InlineCode-DvsXkH-E.js";import"./Link-nQAkOiiB.js";import"./usePress-BKHC3-jq.js";import"./Separator-DwM9gL3F.js";import"./Separator-D2HmxWfn.js";import"./CollectionBuilder-kPYqAuhc.js";import"./Text-8TMWzlfF.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";import"./TextArea-KPaMh6yN.js";import"./TextFieldBase-Bu0l_F9x.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CzXhQYx4.js";import"./TextField-B1BJmtCC.js";import"./FieldError-CwfU_VRl.js";import"./Form-QX_URUcu.js";import"./Group-C2-D-gHZ.js";import"./useTextField-ChNo9r-2.js";import"./useFormReset-Cq5VWng9.js";import"./ReactAriaControlledValueFix-C1hWP_qf.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BKD05Onb.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
