import{j as r}from"./iframe-BGMqIB5E.js";import{M as o}from"./MarkdownEditor-JhQGVAG9.js";import{L as v}from"./Label-ayGMhYtP.js";import{F as B}from"./FieldError-Bx7u0ZLw.js";import{u as I,F as y,a as z}from"./Form-DAcLY11p.js";import{B as V}from"./Button-BFNUJ6Pn.js";import"./Markdown-CJPnle5E.js";import"./CodeBlock-Dfhjozlt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DYyI_JsL.js";import"./IconWarning-mDCCMBSQ.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./Tooltip-Dam5ktVQ.js";import"./utils-DSJ2fpWd.js";import"./OverlayArrow-BCKhjmtK.js";import"./useFocus-DimIAfL3.js";import"./ProgressBar-D-EmigOC.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DEWKGCco.js";import"./context-C9jpkMPH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CyFiZ_AX.js";import"./useFocusable-DsCZ72OQ.js";import"./useFocusRing-Ch_kecTs.js";import"./react-children-utilities-CMiqp-q2.js";import"./Action-l33eddTn.js";import"./context-FbZS6Lb6.js";import"./useStatic-ERGKGHTj.js";import"./browser-BSs9Ljwu.js";import"./getActionGroupSlot-CZh9r0M7.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./Heading-Cd14u_S6.js";import"./Heading-C0F57RmY.js";import"./RSPContexts-W4yDCNDw.js";import"./InlineCode-DL8pm7j0.js";import"./Link-C3hDmnXo.js";import"./usePress-DciW20d_.js";import"./Separator-BskdYpI7.js";import"./Separator-DQBycTyN.js";import"./CollectionBuilder-CvszDNI1.js";import"./Text-CM0LFMBt.js";import"./EmulatedBoldText-fvHudQk4.js";import"./Text-BM4jLh1h.js";import"./TextArea-jusIUMXZ.js";import"./TextFieldBase-BzX-7boJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-De5Izbk0.js";import"./TextField-B67QJCcl.js";import"./FieldError-ClTlFvX2.js";import"./Form-DIhLFb81.js";import"./Group-Cwbp1Rxy.js";import"./useTextField-0bIYzpQ5.js";import"./useFormReset-CGt1BQBC.js";import"./ReactAriaControlledValueFix-Co2OD18X.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C2r7IuQP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
