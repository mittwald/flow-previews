import{j as r,r as H}from"./iframe-CqLmdNeC.js";import{M as t}from"./MarkdownEditor-_DVnw7dO.js";import{L as l}from"./Label-B8Yu6jlZ.js";import{F as K}from"./FieldError-BPhKkw68.js";import{u as N,F as U,a as Y}from"./Form-DHIFVkVp.js";import{B as g}from"./Button-Cck2R8d6.js";import{S as G}from"./Section-DeB4xJxa.js";import"./Markdown-D_ZoaDRw.js";import"./CodeBlock-5RTaqzJe.js";import"./clsx-B-dksMZM.js";import"./CopyButton-p48_gS-o.js";import"./IconWarning-CMS0_eHL.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./Tooltip-0fpLDFGx.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./useFocus-CLcOeBIv.js";import"./ProgressBar-Bc_l3bRQ.js";import"./utils-DVF3OaDc.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BygwjnmG.js";import"./context-DzYatHkR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Blr5WM8A.js";import"./useFocusable-zATjwRwW.js";import"./useFocusRing-B3V5UxLb.js";import"./react-children-utilities-PKIjV_6p.js";import"./Action-CeDhk6lc.js";import"./context-BV-Ks7Oh.js";import"./useStatic-suMR32Og.js";import"./browser-D8TwyJaY.js";import"./getActionGroupSlot-DLpPTNRU.js";import"./dynamic-DFe3knzM.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./Heading-GFbXOXKR.js";import"./Heading-B09eOgMp.js";import"./RSPContexts-BcXX2Wqq.js";import"./InlineCode-C_8qxZ7o.js";import"./Link--Og3sIh-.js";import"./usePress-CKz354k3.js";import"./Separator-C0hve9bk.js";import"./Separator-Bx0e0X1l.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Text-BZ3j-6fi.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./Text-BpEumjQQ.js";import"./TextArea-B9kHvZJW.js";import"./TextFieldBase-CTvE5SnB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BURpBJIt.js";import"./TextField-lXG7M95o.js";import"./FieldError-BRlNdIVM.js";import"./Form-Dz9VUwD7.js";import"./Group-DSZMysmZ.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./ReactAriaControlledValueFix-D-J3s3RX.js";import"./useManagedValue-BzwvcgIZ.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CTcHqu9G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6TKDn6h.js";import"./ContextMenuSection-B-2w8ox3.js";import"./Popover-Cd3uYlMm.js";import"./DialogTriggerView-zx0O_dOm.js";import"./FocusScope-D6JShGuB.js";import"./useCollator-BJ0ATcQr.js";import"./VisuallyHidden-DFEHY8aA.js";import"./Collection-BtI4BBrq.js";import"./SearchField-Bt3pj5UO.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";import"./Switch-DrI2kS3x.js";import"./useToggleState-fB_nzWPD.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
