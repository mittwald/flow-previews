import{j as r,r as H}from"./iframe-Mcl-fp9_.js";import{M as t}from"./MarkdownEditor-BMWbUzVe.js";import{L as l}from"./Label-DVdBQme9.js";import{F as K}from"./FieldError-B7M3u5Ws.js";import{u as N,F as U,a as Y}from"./Form-j5Ncw3Ab.js";import{B as g}from"./Button-DAKl4AvN.js";import{S as G}from"./Section-DfyaeJyH.js";import"./Markdown-BOCSQWn5.js";import"./CodeBlock-Dt9BpKpV.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B2Pk23BD.js";import"./IconWarning-Lyb53OnO.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./Tooltip-Byz8uL7h.js";import"./utils-n1fDyKZ3.js";import"./OverlayArrow-BjKZColU.js";import"./useFocus-SsmNYjih.js";import"./ProgressBar-B-0Imi_2.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DPxX2fH3.js";import"./context-BorfhQA_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ECxCAN2t.js";import"./useFocusable-CVnYh69T.js";import"./useFocusRing-Dg3YPgxl.js";import"./react-children-utilities-BsQQUMGS.js";import"./Action-C_mGnw8t.js";import"./context-UATQnsvR.js";import"./useStatic-DehluLPa.js";import"./browser-BsWVSY18.js";import"./getActionGroupSlot-DpUkVKXY.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./Heading-D8xlpH_x.js";import"./Heading-D7y61Lsk.js";import"./RSPContexts-D5Q6Wlej.js";import"./InlineCode-CKPgxz2W.js";import"./Link-C_b4hIEx.js";import"./usePress-CSmiIi-0.js";import"./Separator-BexV8up0.js";import"./Separator-BOJM7lM-.js";import"./CollectionBuilder-B60nQQtd.js";import"./Text-DEIveL77.js";import"./EmulatedBoldText-yaK_s2Yh.js";import"./Text-DoGyCRc9.js";import"./TextArea-D35xkhI7.js";import"./TextFieldBase-Dch2Xd6m.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cab0JVGg.js";import"./TextField-Cz-aJsxu.js";import"./FieldError-BKKPCq9e.js";import"./Form-W-5ctzVT.js";import"./Group-IKUML2BV.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./ReactAriaControlledValueFix-DmFfptDJ.js";import"./useManagedValue-eGKcA8x5.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-COEYl7Pk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B-ha5P18.js";import"./ContextMenuSection-jJLrD2Vg.js";import"./Dialog-Dbuy5IKg.js";import"./Collection-JtFNZJGn.js";import"./SearchField-CkC64XB4.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./useCollator-BtrL4jRN.js";import"./FocusScope-D7ZuSfg7.js";import"./VisuallyHidden-CZ8WB-4E.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const xe=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,xe as __namedExportsOrder,fe as default};
