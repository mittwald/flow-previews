import{j as r}from"./iframe-9NvHEEYX.js";import{M as o}from"./MarkdownEditor-NsvCa1fp.js";import{L as l}from"./Label-Bp2WajZU.js";import{F as V}from"./FieldError-B6ipGGiX.js";import{u as q,F as P,a as T}from"./Form-CEzK2E1I.js";import{B as A}from"./Button-DNkWV-Zy.js";import"./Markdown-Cfkv92oz.js";import"./CodeBlock-CzXgGaw3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-o2zrc_Kq.js";import"./IconWarning-BrSB4tEd.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./Tooltip-nmpX_R6C.js";import"./utils-phTOhdhB.js";import"./OverlayArrow-Csc6TqF8.js";import"./useFocus-D6PAQN6n.js";import"./ProgressBar-OiyktaR6.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BM-ocsZo.js";import"./context-1WNE-E4a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-QTuKyMuz.js";import"./useFocusable-B9Hhp3CR.js";import"./useFocusRing-B-QDi9By.js";import"./react-children-utilities-DYPEZzyn.js";import"./Action-DrNj8V5h.js";import"./context-BhkBgBm1.js";import"./useStatic-CR_xkm7d.js";import"./browser-bwKj2ElG.js";import"./getActionGroupSlot-v3xFcxcI.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./Heading-D_Pt2E9r.js";import"./Heading-M61hX7dC.js";import"./RSPContexts-C2QF7PgZ.js";import"./InlineCode-DEgAnv5w.js";import"./Link-CVFAfQKC.js";import"./usePress-B41vbTz8.js";import"./Separator-B2wtMzw5.js";import"./Separator-CzXxLIRa.js";import"./CollectionBuilder-BHg4Vaik.js";import"./Text-DmCU-xjB.js";import"./EmulatedBoldText-D0lgjAwv.js";import"./Text-BvWwS3Z5.js";import"./TextArea-ByExVJaQ.js";import"./TextFieldBase-CoRRRdrF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BaEgR1T7.js";import"./TextField-CFZkN_yv.js";import"./FieldError-osHXMSr-.js";import"./Form-Bv_h1ugL.js";import"./Group-HJeSUD3y.js";import"./useTextField-DLSWgg2h.js";import"./useFormReset-CqIGJUAV.js";import"./ReactAriaControlledValueFix-CYYlRawh.js";import"./LoadingSpinner-8k09TVCC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BcHYciFT.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
