import{j as r}from"./iframe-DVH1JXtP.js";import{M as o}from"./MarkdownEditor-DC7xKXaR.js";import{L as l}from"./Label-CxrJqwXs.js";import{F as V}from"./FieldError-4LhCBGmq.js";import{u as q,F as P,a as T}from"./Form-BpB0g6Oe.js";import{B as A}from"./Button-DSdtNwsI.js";import"./Markdown-DJsL0MA3.js";import"./CodeBlock-AnBU4Xcq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-h3TvP1qr.js";import"./IconWarning-CU_Jn-Rh.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./Tooltip-DKusMOpZ.js";import"./utils-BK8baG-i.js";import"./OverlayArrow-ChkDdsgW.js";import"./useFocus-CQVh66mU.js";import"./ProgressBar-BUKyhVQw.js";import"./Label-CMyz7O-I.js";import"./Hidden-weVCu2TA.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-NP7-116U.js";import"./context-CdYfmHmn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Urxw2XXp.js";import"./useFocusable-T2p-jFMn.js";import"./useFocusRing-DRg_t-7O.js";import"./react-children-utilities-TKD2i8JI.js";import"./Action-Dfm0OsG2.js";import"./context-agOgnAGz.js";import"./useStatic-DdpPKhEz.js";import"./browser-C28Fm9d0.js";import"./getActionGroupSlot-B8kYKXqG.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./Heading-DPRmeFmU.js";import"./Heading-D1ZVwUdr.js";import"./RSPContexts-B3CI5xG8.js";import"./InlineCode-C_ZwiSQ1.js";import"./Link-CLQ4f7r9.js";import"./usePress-BeW5A3Oi.js";import"./Separator-DqC_SCVB.js";import"./Separator-QeHbXW8z.js";import"./CollectionBuilder-ChFPkv_k.js";import"./Text-D1P9H2_H.js";import"./EmulatedBoldText-Bdvunp4L.js";import"./Text-CBJ04nMy.js";import"./TextArea-DhOnRMy0.js";import"./TextFieldBase-BSZa_ur9.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dh2sYvVC.js";import"./TextField-DIPy1Cq_.js";import"./FieldError-DwXG4Veb.js";import"./Form-BPwJmxNt.js";import"./Group-DXbOZXZb.js";import"./useTextField-qeWtBHoH.js";import"./useFormReset-rRCeDrNW.js";import"./ReactAriaControlledValueFix-DWpTaiEI.js";import"./LoadingSpinner-BkBLmddP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DzMSo0AA.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,S,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,L,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,v,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(O=(v=p.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var R,_,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,I,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange"];export{t as Default,a as Disabled,p as Resizeable,n as ShowCharacterCount,m as WithFieldError,d as WithForm,i as WithLabel,c as WithOnChange,$r as __namedExportsOrder,Zr as default};
