import{j as r,r as H}from"./iframe-ezKPDceg.js";import{M as t}from"./MarkdownEditor-CgURZcXf.js";import{L as u}from"./Label-BzVYbGPL.js";import{F as K}from"./FieldError-CKyjXhYf.js";import{u as N,F as U,a as Y}from"./Form-D1RaqgWo.js";import{B as P}from"./Button-DbzZMeUS.js";import{S as G}from"./Section-DbGFM1vN.js";import"./Markdown-NzsrjgrA.js";import"./CodeBlock-P73NHrT-.js";import"./clsx-B-dksMZM.js";import"./CopyButton--XqgBMBu.js";import"./IconWarning-iHRHTv2O.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./Tooltip-nRyp4HHW.js";import"./utils-DzswpBsb.js";import"./OverlayArrow-Cg5cqTaC.js";import"./useFocus-DJ-TYVVM.js";import"./ProgressBar-C6U_wRip.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CN4tRF6C.js";import"./context-BrV7YpGK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BblR5lPL.js";import"./useFocusable-B-msIfGP.js";import"./useFocusRing-gH5JHApn.js";import"./react-children-utilities-C2ow_Brc.js";import"./Action-BGk66KIT.js";import"./context-dSZ45fFT.js";import"./useStatic-CNaXVqhs.js";import"./browser-BOjVaVGi.js";import"./getActionGroupSlot-BkTiqldw.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./Heading-DVG7oq5P.js";import"./Heading-DdCynKl4.js";import"./RSPContexts-D9JC3ke5.js";import"./InlineCode-sOxg841s.js";import"./Link-C5-86OP6.js";import"./usePress-DYKNfU9_.js";import"./Separator-8AFnwkeU.js";import"./Separator-Dbz-9PCT.js";import"./CollectionBuilder-CeLFQwBB.js";import"./Text-CUR3tOrp.js";import"./EmulatedBoldText-BpljTSGS.js";import"./Text-BuR4UJfD.js";import"./TextArea-XYCqBZYA.js";import"./TextFieldBase-746khTLn.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CjFZjOmo.js";import"./TextField-CfP2mJzy.js";import"./FieldError-D8wvACBx.js";import"./Form-CmBAUGhT.js";import"./Group-BDVVyk9o.js";import"./useTextField-Dj17RY-h.js";import"./useFormReset-pmH2UUNu.js";import"./ReactAriaControlledValueFix-C-K1Fn8c.js";import"./LoadingSpinner-BRfDN20n.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DO9HCw5q.js";import"./ContextMenuSection-Dcb6Xv1B.js";import"./Dialog-CsG1YX16.js";import"./Collection-ZxatR5QS.js";import"./SearchField-CcD3FqPJ.js";import"./useEvent-RmC2LF0W.js";import"./SelectionManager-DbiWXVNm.js";import"./useCollator-CIKaMC9W.js";import"./FocusScope-eYFIheUb.js";import"./VisuallyHidden-CoNZ8DQ3.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
