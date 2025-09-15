import{j as r,r as H}from"./iframe-BwL5TE8j.js";import{M as t}from"./MarkdownEditor-DP44Kjxy.js";import{L as u}from"./Label-DWj4cilU.js";import{F as K}from"./FieldError-CJJ4jg0R.js";import{u as N,F as U,a as Y}from"./Form-BT-3LKRS.js";import{B as P}from"./Button-aac4MlcR.js";import{S as G}from"./Section-CzjirJ3M.js";import"./Markdown-DCrHz5Fb.js";import"./CodeBlock-Cl91OWmW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bq-_YdYc.js";import"./IconWarning-CFzxGyJP.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./Tooltip-aP5uXKxi.js";import"./utils-D5K6eLjb.js";import"./OverlayArrow-ClAfltY8.js";import"./useFocus-B2onYDnw.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-0Q5rWqkC.js";import"./context-CLDbs9sm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B8vyFbA3.js";import"./useFocusable-DDKZ0z65.js";import"./useFocusRing-Dnm1Bceh.js";import"./react-children-utilities-CLpmS857.js";import"./Action-Dz3okKrM.js";import"./context-CPjnFp9f.js";import"./useStatic-lPJ6-trN.js";import"./browser-BFoEGF9u.js";import"./getActionGroupSlot-D5WSPsgm.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./Heading-CfBpJMd-.js";import"./Heading-KvETIO-A.js";import"./RSPContexts-twmoior-.js";import"./InlineCode-BSDAkxyG.js";import"./Link-DsmtdHqi.js";import"./usePress-H2LW6Ly5.js";import"./Separator-fsALu6zD.js";import"./Separator-BewLs59G.js";import"./CollectionBuilder-BSKAEL2-.js";import"./Text-DGokGAz6.js";import"./EmulatedBoldText-C4JMZ2uF.js";import"./Text-lZrUqOdv.js";import"./TextArea-BlZQOyI6.js";import"./TextFieldBase-DXD1ursj.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BtKIxAwS.js";import"./TextField-CoIF75G6.js";import"./FieldError-sKqByAl8.js";import"./Form-GeiXMdXB.js";import"./Group-DtaLpYpv.js";import"./useTextField-B_NtZtsZ.js";import"./useFormReset-BObq63rv.js";import"./ReactAriaControlledValueFix-CQ1NxDjh.js";import"./LoadingSpinner-xuWixoMH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJbpMApz.js";import"./ContextMenuSection-Ug__qdSH.js";import"./Dialog-CAhtHN7d.js";import"./Collection-D-rOi4Fm.js";import"./SearchField-D9OSv9aH.js";import"./useEvent-CsEmoHY2.js";import"./SelectionManager-DjWaGKUE.js";import"./useCollator-BVjT8-HM.js";import"./FocusScope-BNA3YsCO.js";import"./VisuallyHidden-kWjY9XjT.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
