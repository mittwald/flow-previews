import{j as r,r as H}from"./iframe-Ci7am5-x.js";import{M as t}from"./MarkdownEditor-JQKEEw8p.js";import{L as l}from"./Label-OU3LAgfN.js";import{F as K}from"./FieldError-BJNFa7O1.js";import{u as N,F as U,a as Y}from"./Form-BPQbWRCw.js";import{B as g}from"./Button-BxQcAiXL.js";import{S as G}from"./Section-DRrAxwkd.js";import"./Markdown-BlOlnrB4.js";import"./CodeBlock-CZrzXTLf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DItfDq3n.js";import"./IconWarning-CzB8zWov.js";import"./PropsContextProvider-CQR7cNuW.js";import"./mergeRefs-BZZ4k-un.js";import"./index-BSkYpBON.js";import"./Tooltip-BCPbREw4.js";import"./ClearPropsContextView-QzLGn3tG.js";import"./useFocus-ayIEkHl9.js";import"./ProgressBar-D-kh5LUH.js";import"./utils-D8LfxOEa.js";import"./Label-j8HR0Ono.js";import"./Hidden-6Fb8M7jx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TZmyIU6H.js";import"./context-CzmRZySI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D4tytcWm.js";import"./useFocusable-ChczIcK6.js";import"./useFocusRing-D6Pp4FJL.js";import"./react-children-utilities-CRquUwi_.js";import"./Action-LHdszVl-.js";import"./context-Bg2fb23R.js";import"./useStatic-B16OfDVI.js";import"./browser-1MQn7X-d.js";import"./getActionGroupSlot-q-TSSyCY.js";import"./dynamic-BJQQnM_P.js";import"./useLocalizedStringFormatter-BI8Ehzs7.js";import"./Heading-D4H4HR75.js";import"./Heading-De3U1nCH.js";import"./RSPContexts-DC069Ofk.js";import"./InlineCode-Ca-pVdq9.js";import"./Link-C-u-DJPN.js";import"./usePress-C06syjH3.js";import"./Separator-DTVcLs_h.js";import"./Separator-DH-Qy1Ob.js";import"./CollectionBuilder-CfQBwOi0.js";import"./Text-QWIhyI-d.js";import"./EmulatedBoldText-Cc0xL4Af.js";import"./Text-CnPMclzL.js";import"./TextArea-s5zGWM6f.js";import"./TextFieldBase-lJ9wuUYM.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BTmPq6eh.js";import"./TextField-VePiy-Wr.js";import"./FieldError-DZKw4mWV.js";import"./Form-BeUBWT2I.js";import"./Group-Blfbn2Yc.js";import"./useTextField-BBAHXs5i.js";import"./useFormReset-g9Y9sN6W.js";import"./ReactAriaControlledValueFix-BdSr4TbK.js";import"./useManagedValue-CK8d6kwA.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-t4rMaxgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ByeNiRqN.js";import"./ContextMenuSection-DZA45UBM.js";import"./Popover-Dm762mUl.js";import"./DialogTriggerView-DeMR5m7g.js";import"./FocusScope-2jIUVF7d.js";import"./useCollator-CP32wxPf.js";import"./VisuallyHidden-Bwug4jVH.js";import"./Collection-DbXsSG3M.js";import"./SearchField-DgvC1Z9-.js";import"./useEvent-Cyd1cJwZ.js";import"./SelectionManager-DuM_3MOM.js";import"./Switch-DLjbTmVl.js";import"./useToggleState-BP-QwkBT.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
