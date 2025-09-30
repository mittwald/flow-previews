import{j as r,r as H}from"./iframe-Cb4Rgx0e.js";import{M as t}from"./MarkdownEditor-xVzhdkIv.js";import{L as l}from"./Label-BaR_Jp0n.js";import{F as K}from"./FieldError-BQp9Q2iV.js";import{u as N,F as U,a as Y}from"./Form-BF3A0K6j.js";import{B as g}from"./Button-H4sh-QDS.js";import{S as G}from"./Section-DwpLTDLX.js";import"./index-Cun1SEai.js";import"./Markdown-BLOnayFw.js";import"./CodeBlock-BJG9IPvJ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BNMGUzqT.js";import"./IconWarning-BnvsEgCq.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./Tooltip-DZ54GNRl.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./useFocus-DShqRyJ9.js";import"./ProgressBar-DhcjamRH.js";import"./utils-ClJ9kHS9.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CQK5P4gM.js";import"./useFocusable-Dx7vOlYc.js";import"./useFocusRing-BzqCweW_.js";import"./react-children-utilities-hdthmQ_2.js";import"./Action-DcFJ4Fb5.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./browser-GZXaf9ZM.js";import"./getActionGroupSlot-CMriNb6k.js";import"./dynamic-PM36Lxvz.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./Heading-DkmYDwus.js";import"./Heading-Bdg4szuX.js";import"./RSPContexts-WcRCGlYY.js";import"./InlineCode-CjdJQyPz.js";import"./Link-raLhHApU.js";import"./usePress-Q8MCvqvF.js";import"./Separator-D_z8gXFJ.js";import"./Separator-BKeFtAeg.js";import"./CollectionBuilder-BboySDMU.js";import"./Text-B7bLqwrq.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./Text-U_OSpJmR.js";import"./TextArea-BVOw102L.js";import"./TextFieldBase-C0APWaCi.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CYs7P1qA.js";import"./TextField-PT7iHZQg.js";import"./FieldError-BgWprM1s.js";import"./context-DsHIbBn4.js";import"./Form-Bg0W0weo.js";import"./Group-C_iyrCYK.js";import"./Input-CC07jkqr.js";import"./useTextField-CtknEU75.js";import"./useFormReset-XDrOOyWm.js";import"./useFormValidation-CF7ZQkcY.js";import"./ReactAriaControlledValueFix-BFlZHtZa.js";import"./useManagedValue-D_wW5JI-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CjRzs_7S.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CEnLKZ0o.js";import"./ContextMenuSection-DhKc6P03.js";import"./Popover-CIu4Zu5_.js";import"./DialogTriggerView-BiIifotB.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";import"./Switch-CGy0me7G.js";import"./useToggleState-BNOciw4N.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
