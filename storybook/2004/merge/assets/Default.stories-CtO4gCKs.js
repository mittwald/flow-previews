import{j as r,r as H}from"./iframe-BN_dfUe_.js";import{M as t}from"./MarkdownEditor-DKYCHaRC.js";import{L as l}from"./Label-BSR54Ews.js";import{F as K}from"./FieldError-DsWJyZ3N.js";import{u as N,F as U,a as Y}from"./Form-BJAYt6qk.js";import{B as g}from"./Button-D-C47sqm.js";import{S as G}from"./Section-YRhs5YAy.js";import"./Markdown-DlvENsRY.js";import"./CodeBlock-CJgQY4jI.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CMcucSo6.js";import"./IconWarning-DNOLg4j3.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./Tooltip-Bq7SpaXg.js";import"./ClearPropsContextView-DP5aaG59.js";import"./useFocus-BPnQl8Vs.js";import"./ProgressBar-jBCVtiFi.js";import"./utils-B0sx3Kyr.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BVHoyGPi.js";import"./context-dredv6-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B3OMKOuD.js";import"./useFocusable-CjxkNo9x.js";import"./useFocusRing-BbyZkAky.js";import"./react-children-utilities-D5LF6eI0.js";import"./Action-V_TKCgSi.js";import"./context-DRf69qys.js";import"./useStatic-wsYo6cwd.js";import"./browser-BV7EqxDV.js";import"./getActionGroupSlot-BHB3McHc.js";import"./dynamic-BgZcYaB5.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./Heading-C3bMpqRe.js";import"./Heading-BXZxzqvc.js";import"./RSPContexts-D2tN5T2G.js";import"./InlineCode-BUZSE81D.js";import"./Link-kGknJQZR.js";import"./usePress-D00Qk3ID.js";import"./Separator-CRErl3mY.js";import"./Separator-DJTsPnLp.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Text-DzaqmzRj.js";import"./EmulatedBoldText-D3DsYnee.js";import"./Text-Bh7wF6OD.js";import"./TextArea-DNaLu_d0.js";import"./TextFieldBase-YTUQYWp4.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BxF3CDXG.js";import"./TextField-BdrHFS2A.js";import"./FieldError-CIdDbIOg.js";import"./Form-BI9DTP98.js";import"./Group-BVQ5MOmY.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./ReactAriaControlledValueFix-CA8VJDTf.js";import"./useManagedValue-Bw1_uCWQ.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BajA46At.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Df2sUXty.js";import"./ContextMenuSection-DopY__n7.js";import"./Popover-DLER5_Cb.js";import"./DialogTriggerView-nA9ebbIS.js";import"./FocusScope-DSvKVwGk.js";import"./useCollator-D4KmbgCM.js";import"./VisuallyHidden-Cv7STolA.js";import"./Collection-BYc3dnT8.js";import"./SearchField-BBPaTZKc.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";import"./Switch-ky0UvS97.js";import"./useToggleState-CCrodwRf.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var F,j,w;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,W,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,y,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <Button onPress={() => form.reset()}>Reset</Button>
      </Form>;
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var z,P,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var V,q,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Se=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Se as __namedExportsOrder,Me as default};
