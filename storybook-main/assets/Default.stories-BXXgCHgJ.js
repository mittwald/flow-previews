import{j as r}from"./iframe-DT0a5lsj.js";import{M as o}from"./MarkdownEditor-DUa6Pzrg.js";import{L as v}from"./Label-Dszv3nJ4.js";import{F as B}from"./FieldError-xtdcz2l6.js";import{u as I,F as y,a as z}from"./Form-CDOymGpF.js";import{B as V}from"./Button-BnKE_3tA.js";import"./Markdown-vFweM0kw.js";import"./CodeBlock-DXZpHspO.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BXeER9-V.js";import"./IconWarning-CP_9phWh.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./Tooltip-Blp6pEgY.js";import"./utils-BDe-fZfW.js";import"./OverlayArrow-HNgDPPr3.js";import"./useFocus-BPGD2VLY.js";import"./ProgressBar-ByaJujBA.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BMvlVo7d.js";import"./context-DtNWionw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-X9sbbL.js";import"./useFocusable-DyoB_hOm.js";import"./useFocusRing-_XF1QxIj.js";import"./react-children-utilities-CAbCr3MC.js";import"./Action-DYEDj9x0.js";import"./context-DJTNNuyW.js";import"./useStatic-WTXFIrX_.js";import"./browser-C5BzL4Ah.js";import"./getActionGroupSlot-SZaPZq2Z.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./Heading-CpWZd5Gf.js";import"./Heading-DoScZ8Wx.js";import"./RSPContexts-acmSHJ3A.js";import"./InlineCode-CsncKFBh.js";import"./Link-DflRkJCU.js";import"./usePress-wu8eZQGI.js";import"./Separator-DpQxA3nE.js";import"./Separator-AkxPmIRq.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Text-CWVnGydc.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./Text-C8QSq9Z3.js";import"./TextArea-Dx_SR0Rv.js";import"./TextFieldBase-MfcjJLuF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CZTm8SfG.js";import"./TextField-Cx5OsYq1.js";import"./FieldError-Ccza_qSZ.js";import"./Form-BqKRbvb9.js";import"./Group-MdCfc2bT.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./ReactAriaControlledValueFix-BxcjtgAG.js";import"./LoadingSpinner-8cDNCbSg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BNdmwyxy.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
