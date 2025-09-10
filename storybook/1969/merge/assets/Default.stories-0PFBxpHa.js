import{j as r,r as H}from"./iframe-DxsUlawc.js";import{M as t}from"./MarkdownEditor-Bq2L7RpN.js";import{L as u}from"./Label-B7Tx4Pgn.js";import{F as K}from"./FieldError-B5iG2Dx8.js";import{u as N,F as U,a as Y}from"./Form-UweLUich.js";import{B as P}from"./Button-IG1UbGgX.js";import{S as G}from"./Section-BWq5F8QN.js";import"./Markdown-ppqAIueP.js";import"./CodeBlock-CT5gvXgu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dl-7AEdy.js";import"./IconWarning-CxX_lufW.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./Tooltip-BhzPNsX-.js";import"./utils-anS-nfaS.js";import"./OverlayArrow-Cqrl2gO5.js";import"./useFocus-19elgRbR.js";import"./ProgressBar-litaDe0V.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CBxP0DvO.js";import"./context-Pme8S34O.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BiaHUtte.js";import"./useFocusable-Dsjl8uYb.js";import"./useFocusRing-NqyRw62N.js";import"./react-children-utilities-CrZdRBmV.js";import"./Action-Bm6Z0jHH.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./browser-GG2yXHGk.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./Heading-BOztv1gg.js";import"./Heading-CLK_5_44.js";import"./RSPContexts-D24GGWc4.js";import"./InlineCode-BkGBU-j7.js";import"./Link-CztFBomh.js";import"./usePress-CuZIkaGu.js";import"./Separator-DrYexJlx.js";import"./Separator-MdtjVr6X.js";import"./CollectionBuilder-DUz18fnw.js";import"./Text-BghZAovJ.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./Text-w8QkFxXB.js";import"./TextArea-iUk3UItw.js";import"./TextFieldBase-CN2wXVzT.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BYp4Hrne.js";import"./TextField-BV-7_CBI.js";import"./FieldError-BogjW8MC.js";import"./Form-DGyQGQrN.js";import"./Group-BM4Odlhy.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./ReactAriaControlledValueFix-C9JO9OcQ.js";import"./LoadingSpinner-B_W_hnSA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6Z7YYpb.js";import"./ContextMenuSection-G4FkDWGU.js";import"./Dialog-BhiDy3Uj.js";import"./Collection-2mgYJ3lC.js";import"./SearchField-CP40iq6L.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./useCollator-DS1CRBkN.js";import"./FocusScope-_FVys5dN.js";import"./VisuallyHidden-DjzEMrNo.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
