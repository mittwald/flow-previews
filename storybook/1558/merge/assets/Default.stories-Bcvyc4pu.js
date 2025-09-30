import{j as r,r as H}from"./iframe-oDnSRKrU.js";import{M as t}from"./MarkdownEditor-D0nyX9wz.js";import{L as l}from"./Label-DdcSy8o6.js";import{F as K}from"./FieldError-CEpLicN2.js";import{u as N,F as U,a as Y}from"./Form-BxXqQblL.js";import{B as g}from"./Button-Cfj_belE.js";import{S as G}from"./Section-BTdyD-Hd.js";import"./index-Cun1SEai.js";import"./Markdown-B0tcWYpv.js";import"./CodeBlock-DXGf0q0L.js";import"./clsx-B-dksMZM.js";import"./CopyButton-xas1FKIq.js";import"./IconWarning-BDchKd2I.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./Tooltip-iRWYXsvR.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./useFocus-CBAj8SSC.js";import"./ProgressBar-BuCs3ZnW.js";import"./utils-BOFgiu6B.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IKTU3VFM.js";import"./context-BACVj_LI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C4SjqBt9.js";import"./useFocusable-BIMsrSRy.js";import"./useFocusRing-BvVC0KGc.js";import"./react-children-utilities-U-_V-Pos.js";import"./Action-BMGnqQDt.js";import"./context-BfF8CEMr.js";import"./useStatic-B5fiOOMU.js";import"./browser-B1IGKoaP.js";import"./getActionGroupSlot-DD5xlWbQ.js";import"./dynamic-B66wdgIv.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./Heading-XUur3sa-.js";import"./Heading-m29PahKq.js";import"./RSPContexts-wR3TIPq6.js";import"./InlineCode-BJdlyl2t.js";import"./Link-CI3oVvQy.js";import"./usePress-BlfeWo8-.js";import"./Separator-CqSBUXFH.js";import"./Separator-DoYImFmL.js";import"./CollectionBuilder-BqrWk4D3.js";import"./Text-BRg3dDEW.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Text-BhCBXCIE.js";import"./TextArea-C4T4NFQy.js";import"./TextFieldBase-Cg6npoNG.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DoMeWMhu.js";import"./TextField-BhUX-Snw.js";import"./FieldError-Cv1iD8Fq.js";import"./context-D1pfjzoG.js";import"./Form-HfZRlNH7.js";import"./Group-BZ_dBAGe.js";import"./Input-BviYuwQ8.js";import"./useTextField-C3G6D0-T.js";import"./useFormReset-m0r5jrEx.js";import"./useFormValidation-CpLCzOC_.js";import"./ReactAriaControlledValueFix-p0Vw7kd4.js";import"./useManagedValue-CH2BnLNL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D46_pkFx.js";import"./ContextMenuSection-ivUXKKhV.js";import"./Popover-BAr3bKt4.js";import"./DialogTriggerView-Ce3L8qPr.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";import"./Switch-CmESvRX8.js";import"./useToggleState-9AVyzi3E.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
