import{j as r,r as H}from"./iframe-BJWngGl7.js";import{M as t}from"./MarkdownEditor-Dd5rQMza.js";import{L as l}from"./Label-DuDbuPqK.js";import{F as K}from"./FieldError-BQmnq4AI.js";import{u as N,F as U,a as Y}from"./Form-DDo3nbid.js";import{B as g}from"./Button-Dpovk5Ay.js";import{S as G}from"./Section-BERpR9JG.js";import"./Markdown-B1dzHBvH.js";import"./CodeBlock-BQzcg2fd.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Da_e0Q88.js";import"./IconWarning-CLxGQCa2.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./Tooltip-ECn4vtaU.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./useFocus-B52D3fzv.js";import"./ProgressBar-IjP_LWAf.js";import"./utils-BjLoxrER.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./context-ZX7huqtR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DIKMvFKO.js";import"./useFocusable-jxsYQPZM.js";import"./useFocusRing-B_Jq-YSB.js";import"./react-children-utilities-DhRUyYx3.js";import"./Action-1l9_L_W5.js";import"./context-D9sg3hhH.js";import"./useStatic-BpRokF7z.js";import"./browser-qhbVwDYR.js";import"./getActionGroupSlot-BcQW_u77.js";import"./dynamic-D7o2EbQn.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./Heading-ByO-2qwf.js";import"./Heading-Cup4Z6Fz.js";import"./RSPContexts-1ZAuRZHz.js";import"./InlineCode-bZCCZRna.js";import"./Link-CUH-0kU7.js";import"./usePress-Bx1Ga4ml.js";import"./Separator-CQlXAB6H.js";import"./Separator-DE1lcCbm.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Text-D-lw11hw.js";import"./EmulatedBoldText-BDv3rega.js";import"./Text-zfbbvU9b.js";import"./TextArea-DTWYAikJ.js";import"./TextFieldBase-XoGmctDW.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CU15SeiK.js";import"./TextField-BtON624e.js";import"./FieldError-RjUORd-P.js";import"./Form-DRROzcFd.js";import"./Group-BEwONPHD.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./ReactAriaControlledValueFix-Dql89lWY.js";import"./useManagedValue-cC2NXg81.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BC63ENzq.js";import"./ContextMenuSection-CXXK-GFz.js";import"./Popover-DBKfYnMB.js";import"./DialogTriggerView-G0XTVNWS.js";import"./FocusScope-DwCuMKHy.js";import"./useCollator-Qs-Te_M3.js";import"./VisuallyHidden-5aVnsY39.js";import"./Collection-CxJ7q3qS.js";import"./SearchField-Cm99TGpl.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";import"./Switch-CG1SlLpX.js";import"./useToggleState-BSRRsi4v.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
