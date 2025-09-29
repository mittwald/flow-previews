import{j as r,r as H}from"./iframe-JrijvI0G.js";import{M as t}from"./MarkdownEditor-B6jC-zXE.js";import{L as l}from"./Label-BWdEIo8l.js";import{F as K}from"./FieldError-KC3s-9B5.js";import{u as N,F as U,a as Y}from"./Form-ChtMtnS4.js";import{B as g}from"./Button-nOLp9HyP.js";import{S as G}from"./Section-_sZpzwSW.js";import"./index-Cun1SEai.js";import"./Markdown-ClyKsUcf.js";import"./CodeBlock-D_vmUh66.js";import"./clsx-B-dksMZM.js";import"./CopyButton-yFxpCMxK.js";import"./IconWarning-B3U3_U2s.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./Tooltip-C5LUaqFr.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./useFocus-DA61-eEI.js";import"./ProgressBar-D10mUZdz.js";import"./utils-DhZkrhHH.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D5nQ4vXC.js";import"./context-CnkMg4nA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DQPwS-UF.js";import"./useFocusable-DIk21gkV.js";import"./useFocusRing-DCbTuOGO.js";import"./react-children-utilities-C5pwjcTQ.js";import"./Action-CunTtwFt.js";import"./context-CS_K62PD.js";import"./useStatic-9jHtrOTK.js";import"./browser-eHAjn9uV.js";import"./getActionGroupSlot-BuUDRoIK.js";import"./dynamic-BUc0KwfX.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./Heading-C_XHAp4M.js";import"./Heading-BW0daRbe.js";import"./RSPContexts-bEimFc0k.js";import"./InlineCode-DZMJuouN.js";import"./Link-3TLUsjGm.js";import"./usePress-JaoXEhrO.js";import"./Separator-Ddfy6VDa.js";import"./Separator-D6-9qD1D.js";import"./CollectionBuilder-CnCpguDd.js";import"./Text-9s7Vdafx.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./Text-Bm8Zb_oa.js";import"./TextArea-DglhQfND.js";import"./TextFieldBase-Bf9Iu2pM.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C6floWpY.js";import"./TextField-Dy-QQf8E.js";import"./FieldError-B0ZHUsLp.js";import"./context-SLDg-fw2.js";import"./Form-Vksxts5m.js";import"./Group-DdGbTH8K.js";import"./Input-B9FmC8HN.js";import"./useTextField-02gFnEcc.js";import"./useFormReset-Bl0dawgu.js";import"./useFormValidation-OftsP-u_.js";import"./ReactAriaControlledValueFix-BKaedhI2.js";import"./useManagedValue-BdIduRf5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BpDSxo2f.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bp13GR3E.js";import"./ContextMenuSection-B_Wuc4T7.js";import"./Popover-irUcUI-O.js";import"./DialogTriggerView-DOh3nc4_.js";import"./FocusScope-Bwbpfbbo.js";import"./useCollator-ChdaOTfc.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Collection-yP15xrib.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";import"./Switch-BhTGOwor.js";import"./useToggleState-CJGhq3Gn.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
