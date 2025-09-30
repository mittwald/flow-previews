import{j as r,r as H}from"./iframe-BkQEXHdV.js";import{M as t}from"./MarkdownEditor-Ok83IWAE.js";import{L as l}from"./Label-DCwzji4R.js";import{F as K}from"./FieldError-1DZO4FvY.js";import{u as N,F as U,a as Y}from"./Form-DpSOJqhG.js";import{B as g}from"./Button-Pi6ts98U.js";import{S as G}from"./Section-FKwjM1dg.js";import"./index-Cun1SEai.js";import"./Markdown-BDsnPxD8.js";import"./CodeBlock-BHwZ0wWm.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cm5RDCvt.js";import"./IconWarning-Bhg2W068.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./Tooltip-rlTVK9C_.js";import"./ClearPropsContextView-DluELhC2.js";import"./useFocus-DvrdYcoe.js";import"./ProgressBar-BZ-kanOy.js";import"./utils-vh8nJaNh.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B9G_gEh3.js";import"./context-DYNAGC-2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DaeuqNOc.js";import"./useFocusable-E_oKRPWi.js";import"./useFocusRing-DgjuUHXy.js";import"./react-children-utilities-D51SXAgD.js";import"./Action-ZxRK_-5p.js";import"./context-D6bN450f.js";import"./useStatic-D2LoWVgv.js";import"./browser-T6JBIPNk.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./dynamic-BBWe3ygL.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./Heading-CFJEQMAA.js";import"./Heading-BV1AUrOJ.js";import"./RSPContexts-BoauDkAB.js";import"./InlineCode-CCr0f-WY.js";import"./Link-C1KcylOI.js";import"./usePress-CS8Sp9_K.js";import"./Separator-mbCSYral.js";import"./Separator-ITSOrukA.js";import"./CollectionBuilder-CMEP5N_o.js";import"./Text-waR3uY_i.js";import"./EmulatedBoldText-DAPjbogn.js";import"./Text-vqf5-lqk.js";import"./TextArea-BJ1gyEdr.js";import"./TextFieldBase-DQ6x1oIb.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-H6gY4iu-.js";import"./TextField-C0qXDBxZ.js";import"./FieldError-DGWLCZ3i.js";import"./context-Df1kKepL.js";import"./Form-BhNATljn.js";import"./Group-048JPUOO.js";import"./Input-B_J8uYe3.js";import"./useTextField-ZuBW_ptm.js";import"./useFormReset-C2GAx1Zc.js";import"./useFormValidation-O3WohNjc.js";import"./ReactAriaControlledValueFix-CvjKg_5M.js";import"./useManagedValue-BoDypr3f.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BoU0TUya.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-U99YD9dQ.js";import"./ContextMenuSection-fPmGy5Mt.js";import"./Popover-8rOZkqNf.js";import"./DialogTriggerView-wkk6S007.js";import"./FocusScope-1Unh1ODV.js";import"./useCollator-CckG7hwg.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Collection-41evgXm1.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";import"./Switch-BbY-iNWo.js";import"./useToggleState-D586bBrY.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
