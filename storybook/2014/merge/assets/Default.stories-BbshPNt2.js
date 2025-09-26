import{j as r,r as H}from"./iframe-Dp_ptgTO.js";import{M as t}from"./MarkdownEditor-1WMiGfjr.js";import{L as l}from"./Label-Bfe7G6ov.js";import{F as K}from"./FieldError-BlMfL7YS.js";import{u as N,F as U,a as Y}from"./Form-ByP6LItT.js";import{B as g}from"./Button-Bm7Tf187.js";import{S as G}from"./Section-Ct02y9-D.js";import"./index-Cun1SEai.js";import"./Markdown-B3oVHYUW.js";import"./CodeBlock-CoQ1uPN-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DXNcU-rx.js";import"./IconWarning-CESkhJY3.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./Tooltip-xeZooFL5.js";import"./ClearPropsContextView-BbJozVRy.js";import"./useFocus-BGDVbxBE.js";import"./ProgressBar-DMXo3Oxb.js";import"./utils-jLhJmKpa.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CuGJ_WBQ.js";import"./context-dvnbYm3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-rqltzUWl.js";import"./useFocusable-Pd3lvrKn.js";import"./useFocusRing-MWP1ZcQm.js";import"./react-children-utilities-DPW0iKtZ.js";import"./Action-D8BJShfM.js";import"./context-DDTw2-bn.js";import"./useStatic-m8l0C_TU.js";import"./browser-D6_L72sC.js";import"./getActionGroupSlot-DyRiGzXE.js";import"./dynamic-N86xW7wt.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./Heading-ffyrPZO9.js";import"./Heading-VpbVhQYC.js";import"./RSPContexts-B9nFdFkt.js";import"./InlineCode-CZgUEfIu.js";import"./Link-BfaDPDPe.js";import"./usePress-DgTBEQGy.js";import"./Separator-D7E92lrd.js";import"./Separator-BGudjOFK.js";import"./CollectionBuilder-D4MRH1wH.js";import"./Text-DKCpryII.js";import"./EmulatedBoldText-RaOWrRWm.js";import"./Text--dlrpEAx.js";import"./TextArea-BlcolQMz.js";import"./TextFieldBase-BoV6C2jF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-_sE_f3No.js";import"./TextField-BJgtSOFG.js";import"./FieldError-Izh2_fYp.js";import"./context-DhKk3IGs.js";import"./Form-v2gdHsY3.js";import"./Group-D-YhKZJB.js";import"./Input-ma6DJJKp.js";import"./useTextField-_OLRvzuM.js";import"./useFormReset-CqaGS40P.js";import"./useFormValidation-CyColpPY.js";import"./ReactAriaControlledValueFix-lEod25kb.js";import"./useManagedValue-XYtfrINT.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CO7k3E9d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CtqZigcv.js";import"./ContextMenuSection-DtLQL4-Q.js";import"./Popover-CLhZGReB.js";import"./DialogTriggerView-VHLYNpVx.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./SelectionManager-BktYLEMf.js";import"./useEvent-BAkCuTus.js";import"./Switch-BhZFtZ7l.js";import"./useToggleState-BTLQo5Y8.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const je=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,je as __namedExportsOrder,Fe as default};
