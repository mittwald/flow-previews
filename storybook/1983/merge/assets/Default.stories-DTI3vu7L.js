import{j as r,r as H}from"./iframe-BJ0F67WV.js";import{M as t}from"./MarkdownEditor-Bu7iyShn.js";import{L as u}from"./Label-DdDrAhKV.js";import{F as K}from"./FieldError-B5pU0GHC.js";import{u as N,F as U,a as Y}from"./Form-CphuCCBx.js";import{B as P}from"./Button-CnQZL08m.js";import{S as G}from"./Section-DYjzF64I.js";import"./Markdown-CKMcrNcr.js";import"./CodeBlock-DXTKQfXB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CmZiyQsq.js";import"./IconWarning-D8lhACCL.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./Tooltip-ByNwAnsU.js";import"./utils-CfdyWDg2.js";import"./OverlayArrow--hlAjm0f.js";import"./useFocus-N8Qk0gvU.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./context-DDk-RgEI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-g4NJV7ij.js";import"./useFocusable-k7wU8KZy.js";import"./useFocusRing-CZqmVUZk.js";import"./react-children-utilities-B_H1ICNu.js";import"./Action-DQsKkgIU.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./browser-ENr42WFT.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./dynamic-D4EbkcOt.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./Heading-B9mg5LEa.js";import"./Heading-BcZio6h0.js";import"./RSPContexts-BTU5SObx.js";import"./InlineCode-TcmT717K.js";import"./Link-C1_LKXDW.js";import"./usePress-C0-WYOlY.js";import"./Separator-CePrqRxP.js";import"./Separator-CMNt12Nc.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Text-DvcA_djt.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Text-DUTh34WN.js";import"./TextArea-B6LgvsW8.js";import"./TextFieldBase-DoEesKfD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-COCDalyM.js";import"./TextField-CsP4pSiS.js";import"./FieldError-zuZgMzEa.js";import"./Form-aW46NXWl.js";import"./Group-CRkQVq-1.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./ReactAriaControlledValueFix-CXV4MYur.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJVv4977.js";import"./ContextMenuSection-Dlp4NHpV.js";import"./Dialog-CcAHYHw-.js";import"./Collection-B8sxr2FE.js";import"./SearchField-K6WJ8JUX.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,F,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,R,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var I,z,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,q,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ge=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,a as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,n as WithLabel,d as WithOnChange,l as WithRef,ge as __namedExportsOrder,he as default};
