import{j as r,r as H}from"./iframe-Iz-jrQ83.js";import{M as t}from"./MarkdownEditor-CF9nAwvJ.js";import{L as l}from"./Label-BLFOHaT0.js";import{F as K}from"./FieldError-CRVd2q9t.js";import{u as N,F as U,a as Y}from"./Form-BfqBRfyD.js";import{B as g}from"./Button-vOPcRaQ8.js";import{S as G}from"./Section-BM0Kalgb.js";import"./Markdown-DsupgrXg.js";import"./CodeBlock-BiL7tRib.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DdT90464.js";import"./IconWarning-BfmxR99x.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./Tooltip-aj5531e9.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./useFocus-p13hF2Sk.js";import"./ProgressBar-xCJgXxXU.js";import"./utils-Dydu0pBS.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BXusGe9W.js";import"./context-BdTRL7oB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C1EOK33K.js";import"./useFocusable-D1JGAIsJ.js";import"./useFocusRing-DSCSSA3t.js";import"./react-children-utilities-qXx-modQ.js";import"./Action-Br1QCYBe.js";import"./context-DNlUm82J.js";import"./useStatic-D6VuC2u7.js";import"./browser-njf7oZ8k.js";import"./getActionGroupSlot-DopO3qdD.js";import"./dynamic-Bo4plrg9.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./Heading-C6NSSN9v.js";import"./Heading-LjQ3pJ7P.js";import"./RSPContexts-BeWSySSO.js";import"./InlineCode-Cq1u-KsB.js";import"./Link-DEyuIf0T.js";import"./usePress-CAUR_6bc.js";import"./Separator-BtA_yXJ_.js";import"./Separator-CTGwUbop.js";import"./CollectionBuilder-CH12bxgH.js";import"./Text-Dk41Q_nF.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./Text-DcONEmQQ.js";import"./TextArea-CW4TJSA5.js";import"./TextFieldBase-CpxQbKgc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CEUkGFJG.js";import"./TextField-DzXCHFtW.js";import"./FieldError-7b0XYa9_.js";import"./Form-B2pzq79_.js";import"./Group-Dc1Igsud.js";import"./useTextField-c8k6OVAk.js";import"./useFormReset-Cl_PLqIc.js";import"./ReactAriaControlledValueFix-B0uJRkpq.js";import"./useManagedValue-Cdezhx4B.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BKi8wNla.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-P11Hto4i.js";import"./ContextMenuSection-BPS38MvH.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./SearchField-CsOWpSNr.js";import"./useEvent-CCByfuyl.js";import"./SelectionManager-DJ3uM6IO.js";import"./Switch-qmJ61_Ws.js";import"./useToggleState-DXGcm8AT.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
