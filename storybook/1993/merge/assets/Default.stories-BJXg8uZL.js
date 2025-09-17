import{j as r,r as H}from"./iframe-DKbVX-Q4.js";import{M as t}from"./MarkdownEditor-DP-rigVR.js";import{L as l}from"./Label-Dr8K8otC.js";import{F as K}from"./FieldError-DmYZY-AH.js";import{u as N,F as U,a as Y}from"./Form-bV_0g262.js";import{B as g}from"./Button-DHaahZXz.js";import{S as G}from"./Section-CjL3sscm.js";import"./Markdown-DBMSAYAG.js";import"./CodeBlock-D4gHIhH4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cqdtzc0C.js";import"./IconWarning-CwOfNeg5.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./Tooltip-BiRbSViV.js";import"./utils-BkpHnTsU.js";import"./OverlayArrow-DI6CzN6D.js";import"./useFocus-BSzVp7e_.js";import"./ProgressBar-CBmHG919.js";import"./Label-zFNLx0tV.js";import"./Hidden-D4Nr3Z2s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xF4kjUJ4.js";import"./context-CEbk5IPs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DPI6eaeZ.js";import"./useFocusable-V5Yb86R1.js";import"./useFocusRing-CNTepbVZ.js";import"./react-children-utilities-Bkz_eSVg.js";import"./Action-DMnUknIz.js";import"./context-cawJMatb.js";import"./useStatic-X0n-4EnU.js";import"./browser-f0JKU1-T.js";import"./getActionGroupSlot-BGUvfLPF.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./Heading-DVMpdE5r.js";import"./Heading-5IUx1rJ9.js";import"./RSPContexts-DwjCRf2W.js";import"./InlineCode-9B9G23TP.js";import"./Link-DaR8VW1w.js";import"./usePress-xBrGITaP.js";import"./Separator-CHbBUb1O.js";import"./Separator-B52_I9Ir.js";import"./CollectionBuilder-DDbAHuMc.js";import"./Text-BScgMmTm.js";import"./EmulatedBoldText-GMB9n-7d.js";import"./Text-CUplgO8_.js";import"./TextArea-nbs4EnXR.js";import"./TextFieldBase-E01drC-x.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DIcjPjOK.js";import"./TextField-Bg7pk97P.js";import"./FieldError-DMz-rebE.js";import"./Form-DeoxQrJ0.js";import"./Group-9s9egjt8.js";import"./useTextField-DCNHdt2S.js";import"./useFormReset-Bl7MFLhY.js";import"./ReactAriaControlledValueFix-BRsoMo0n.js";import"./useManagedValue-CAyg2rgu.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-nmPm0aQJ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BxBgI48c.js";import"./ContextMenuSection-CHV2ELo8.js";import"./Dialog-CMjGRt0K.js";import"./Collection-ztGNnLcc.js";import"./SearchField-CYyqDTIT.js";import"./useEvent-CpKb_F4n.js";import"./SelectionManager-egJl3JHW.js";import"./useCollator-BomaeOTE.js";import"./FocusScope-Cxy8QZEw.js";import"./VisuallyHidden-DbgH8FGV.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
