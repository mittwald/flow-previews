import{j as r,r as H}from"./iframe-ct20Zc4_.js";import{M as t}from"./MarkdownEditor-IOD92C4k.js";import{L as l}from"./Label-Dr2f8Urt.js";import{F as K}from"./FieldError-3QHdAtoW.js";import{u as N,F as U,a as Y}from"./Form-Bx4qtmFG.js";import{B as g}from"./Button-D_7HTG7B.js";import{S as G}from"./Section-9uE5FTdJ.js";import"./Markdown-DbnsN6fU.js";import"./CodeBlock-BVQQDmQX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DSVbdDNB.js";import"./IconWarning-CcsQkvTO.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./Tooltip-DxANvok-.js";import"./ClearPropsContextView-YUez0bQh.js";import"./useFocus-BkH8qcCX.js";import"./ProgressBar-CK-tPEaL.js";import"./utils-DpMwq36_.js";import"./Label-Acl7hQj6.js";import"./Hidden-B9i9z_Z9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cp6IFTTd.js";import"./context-DnCGX3ZW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CwKmYwnv.js";import"./useFocusable-CQ8WqruE.js";import"./useFocusRing-D8miGa7N.js";import"./react-children-utilities-BseQC5s3.js";import"./Action-BP61FP92.js";import"./context-BYoyCjQY.js";import"./useStatic-x6Peb5cY.js";import"./browser-Cy4n9sSP.js";import"./getActionGroupSlot-DgDgHkEO.js";import"./dynamic-tkuqvrvh.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./Heading-CZ_DW7ZR.js";import"./Heading-CTWkE0iq.js";import"./RSPContexts-C51MpexI.js";import"./InlineCode-Du4sfLq-.js";import"./Link-RUIkkrne.js";import"./usePress-C5fNoyVy.js";import"./Separator-DjizMciT.js";import"./Separator-C0MPI4X4.js";import"./CollectionBuilder-hbCRLoQk.js";import"./Text-DcjvjsPV.js";import"./EmulatedBoldText-CxSwZZv_.js";import"./Text-BxKbsi5b.js";import"./TextArea-BaLrkbQd.js";import"./TextFieldBase-Bz8_kCur.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CdEx8efJ.js";import"./TextField-BxnrnSEC.js";import"./FieldError-kSnIjzvs.js";import"./Form-BSds6g5P.js";import"./Group-DAb_r1xm.js";import"./useTextField-B0tvR0aW.js";import"./useFormReset-DrqvUx_9.js";import"./ReactAriaControlledValueFix-BECyaTuY.js";import"./useManagedValue-uiG49Ox7.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-UirJOZi_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DDK8DVRp.js";import"./ContextMenuSection-9u3YjVGW.js";import"./Popover-DidQYUqo.js";import"./DialogTriggerView-Dw2hBdec.js";import"./FocusScope-B8eJTcfl.js";import"./useCollator-CiYYIB6D.js";import"./VisuallyHidden-TqoC2igt.js";import"./Collection-IIiQ3cHk.js";import"./SearchField-nImGJb9R.js";import"./useEvent-u8lVOPY0.js";import"./SelectionManager-C0f7nk4D.js";import"./Switch-aXekOSm3.js";import"./useToggleState-9f45isSY.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
