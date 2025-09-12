import{j as r,r as H}from"./iframe-BsMxae-o.js";import{M as t}from"./MarkdownEditor-gfgAY8Lq.js";import{L as u}from"./Label-BYgJ_MYX.js";import{F as K}from"./FieldError-Bafd17gj.js";import{u as N,F as U,a as Y}from"./Form-Di6nNt_Y.js";import{B as P}from"./Button-DfdH0gMv.js";import{S as G}from"./Section-C3fuBbF5.js";import"./Markdown-DXeGyh0Q.js";import"./CodeBlock-Cz_ayDwJ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DB7wXtOS.js";import"./IconWarning-B9I94qHq.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./Tooltip-DSibIiUx.js";import"./utils-BMVQSkne.js";import"./OverlayArrow-CRlBDhHx.js";import"./useFocus-HKqTfwLq.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvYe3LSr.js";import"./context-DrnfoIRz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CcMFCsVI.js";import"./useFocusable-DYhRFaOI.js";import"./useFocusRing-DtSDG_eK.js";import"./react-children-utilities-J2SLQa0z.js";import"./Action-Cu5585NU.js";import"./context-BQl0W7wd.js";import"./useStatic-NxgnZ87E.js";import"./browser-BOk4ZIfK.js";import"./getActionGroupSlot-DrUE4wXM.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./Heading-YHeaSeUe.js";import"./Heading-CvCiAr4K.js";import"./RSPContexts-Bo0-inYM.js";import"./InlineCode-BxNvTWOo.js";import"./Link-FNIu49o-.js";import"./usePress-DrYqgVGE.js";import"./Separator-DRXGbZaA.js";import"./Separator-BgSjOnqA.js";import"./CollectionBuilder--Y6752fw.js";import"./Text-B7cMlOzY.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./Text-B7BhLbkb.js";import"./TextArea-8Ll-aO7O.js";import"./TextFieldBase-D47S17MP.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BnPdtoeH.js";import"./TextField-BomFOzDr.js";import"./FieldError-BMEYjrX6.js";import"./Form-D5ALWCUg.js";import"./Group-CKe7hi61.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./ReactAriaControlledValueFix-F62Dze-M.js";import"./LoadingSpinner-B-hN89-2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cr74-zWI.js";import"./ContextMenuSection-BPJsTYfZ.js";import"./Dialog-otIdMc29.js";import"./Collection-BsdihtfM.js";import"./SearchField-C1j-ZqX1.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./useCollator-BG1bVIzj.js";import"./FocusScope-CZ17A4u_.js";import"./VisuallyHidden-D9PR17i6.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
