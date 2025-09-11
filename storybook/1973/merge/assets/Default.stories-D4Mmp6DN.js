import{j as r,r as H}from"./iframe-DvGStSYQ.js";import{M as t}from"./MarkdownEditor-mMiOlntU.js";import{L as u}from"./Label-DhM8XMbl.js";import{F as K}from"./FieldError-BtrW-4IP.js";import{u as N,F as U,a as Y}from"./Form-BQbUUCzj.js";import{B as P}from"./Button-DjKTL3-y.js";import{S as G}from"./Section-BAq2AulW.js";import"./Markdown-DqXHrP8l.js";import"./CodeBlock-C2_agGQX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DE47lBXu.js";import"./IconWarning-PCMncW0h.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./Tooltip-q1MTzPhm.js";import"./utils-BfKSOXmh.js";import"./OverlayArrow-Cm-qLoTT.js";import"./useFocus-Dk72H1bO.js";import"./ProgressBar-BElErXd2.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-pezwcoCn.js";import"./context-AtsIIwtl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BCrcM4bM.js";import"./useFocusable-51csEq1k.js";import"./useFocusRing-ldGrbWty.js";import"./react-children-utilities-C3pm5Lp_.js";import"./Action-BWXqzLSl.js";import"./context-Cq3VHa6C.js";import"./useStatic-DiIM3txy.js";import"./browser-B7JgWknh.js";import"./getActionGroupSlot-S1WVYHYX.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./Heading-CcAer-3o.js";import"./Heading-Cluu2882.js";import"./RSPContexts-Dwdml_ht.js";import"./InlineCode-BWxYjIY5.js";import"./Link-zvNuQUgJ.js";import"./usePress-i0ws38c9.js";import"./Separator-oppVRoKz.js";import"./Separator-dZEiMybe.js";import"./CollectionBuilder-DHXYJDan.js";import"./Text-aqY_knFC.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./Text-C8nQapVu.js";import"./TextArea-BRMbRF0g.js";import"./TextFieldBase-Csd4Mwds.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CHRa7vP-.js";import"./TextField-DaGxzBCI.js";import"./FieldError-Cv8C3-Ec.js";import"./Form-BeVzvFPG.js";import"./Group-BlAVBLoF.js";import"./useTextField-Su4XsVqq.js";import"./useFormReset-CpcIO9Ob.js";import"./ReactAriaControlledValueFix-xbKZ8Gu8.js";import"./LoadingSpinner-KPhGKvxN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSYAfZ7k.js";import"./ContextMenuSection-BLWfrl0H.js";import"./Dialog-CYVeUmsI.js";import"./Collection-C-BG6Vrm.js";import"./SearchField-BP1Cyyuc.js";import"./useEvent-P2zKSTCT.js";import"./SelectionManager-CRcC2iB_.js";import"./useCollator-CtQygjZr.js";import"./FocusScope-Dv52udGl.js";import"./VisuallyHidden-BQiIpSgJ.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
