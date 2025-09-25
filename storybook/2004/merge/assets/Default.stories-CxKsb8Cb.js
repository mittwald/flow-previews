import{j as r,r as H}from"./iframe-DOdCrrz9.js";import{M as t}from"./MarkdownEditor-D87sDI1j.js";import{L as l}from"./Label-CdGOe_rR.js";import{F as K}from"./FieldError-ebeXoxd5.js";import{u as N,F as U,a as Y}from"./Form-CBGxxw_L.js";import{B as g}from"./Button-B4t52lNZ.js";import{S as G}from"./Section-DROGtctI.js";import"./Markdown-Bxl-6dK8.js";import"./CodeBlock-B0UYZDK2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B-y-F8Uf.js";import"./IconWarning-B_Db9Y2d.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./Tooltip-CV-IOCnN.js";import"./ClearPropsContextView-Br_9Bgha.js";import"./useFocus-D8b650dP.js";import"./ProgressBar-CMaicEWm.js";import"./utils-BhoG2uU0.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-nPFfwg7P.js";import"./context-B_SSW0HI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DT9C-0RB.js";import"./useFocusable-C6B3BW3Y.js";import"./useFocusRing-DgTZQDGQ.js";import"./react-children-utilities-Wld1AjuW.js";import"./Action-mSB8KV6a.js";import"./context-CptZziwP.js";import"./useStatic-6ENCHy3p.js";import"./browser-ChoqAG5f.js";import"./getActionGroupSlot-B_tXH0Q6.js";import"./dynamic-bhcJ8YER.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./Heading-B3Vm_Aux.js";import"./Heading-BOxaabaZ.js";import"./RSPContexts-OikXJV7Y.js";import"./InlineCode-D26IGTpV.js";import"./Link-Bnix3hme.js";import"./usePress-Cgctm68w.js";import"./Separator-D8fTPV22.js";import"./Separator-D4a_mIW-.js";import"./CollectionBuilder-DNDqtAqI.js";import"./Text-BFGg7rBT.js";import"./EmulatedBoldText-CTisuoOf.js";import"./Text-Cec-yt4l.js";import"./TextArea-cc5LI5jK.js";import"./TextFieldBase-JhRIFnNX.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CYQ0foI7.js";import"./TextField-D3yV1HlH.js";import"./FieldError-Dz-HK9bS.js";import"./Form-D1kKLxzM.js";import"./Group-CGSoOA49.js";import"./useTextField-E_po2vaq.js";import"./useFormReset-BZL1wYkF.js";import"./ReactAriaControlledValueFix-DjqYTo4V.js";import"./useManagedValue-mKiIsQ3Q.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-iDIwh9pR.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BQ3dFx8x.js";import"./ContextMenuSection-CIiqGwUj.js";import"./Popover-D2I_wG2X.js";import"./DialogTriggerView-aJwD6Ful.js";import"./FocusScope-BZjUyJi9.js";import"./useCollator-DDFrVUE2.js";import"./VisuallyHidden-CbboIbzH.js";import"./Collection-D29CaRkM.js";import"./SearchField-D44cV1AG.js";import"./useEvent-DybSIsxD.js";import"./SelectionManager-DE4WCsU3.js";import"./Switch-CT-CnlZC.js";import"./useToggleState-2jfqagud.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
