import{j as r,r as H}from"./iframe-MIRc1tgM.js";import{M as t}from"./MarkdownEditor-C4WmqSdp.js";import{L as l}from"./Label-6ip-YDAK.js";import{F as K}from"./FieldError-DXgvjoE9.js";import{u as N,F as U,a as Y}from"./Form-CnYaB6E2.js";import{B as g}from"./Button-JGTIxpZE.js";import{S as G}from"./Section-vX5v4wZz.js";import"./index-Cun1SEai.js";import"./Markdown-B5OjfYPs.js";import"./CodeBlock-D6tRANx-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DfRNRMHk.js";import"./IconWarning-0xUxCYxJ.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./Tooltip-DYVJb0oU.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useFocus-D5-sLX53.js";import"./ProgressBar-DSHI0B5V.js";import"./utils-Wg8-dAbi.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BYf9ahG7.js";import"./context-7dZHwnb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-hbnLpfLJ.js";import"./useFocusable-42wCCaNx.js";import"./useFocusRing-BXtZEpMW.js";import"./react-children-utilities-C3Y2kibY.js";import"./Action-C4w8f-qm.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./browser-D2aBH95U.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./dynamic-C-bCBCeB.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./Heading-CpZU4iUX.js";import"./Heading-Doke7kKe.js";import"./RSPContexts-TWbyIvJO.js";import"./InlineCode-BX9xdvP6.js";import"./Link-r9h-e9yX.js";import"./usePress-BoYI9IsN.js";import"./Separator-Drd5t6nX.js";import"./Separator-CwF2l7Tl.js";import"./CollectionBuilder-gc2XqGfN.js";import"./Text-DB0aA-4n.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Text-CqfOq6kd.js";import"./TextArea-MPI-RdRu.js";import"./TextFieldBase-B8yJo0IK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B7e-UXQa.js";import"./TextField-BI7zaVgW.js";import"./FieldError-CET0Lp84.js";import"./context-gIAWaTnY.js";import"./Form-DdpQvp-N.js";import"./Group-CntKpz0M.js";import"./Input-Dq9_JaMk.js";import"./useTextField-D6znRGpk.js";import"./useFormReset-BLfHAfi4.js";import"./useFormValidation-BwYj4c-E.js";import"./ReactAriaControlledValueFix-CDVpgvAn.js";import"./useManagedValue-Ba-4bJD0.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bb1_Qr-8.js";import"./ContextMenuSection-T61eJ4bk.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Switch-CTyi_YgO.js";import"./useToggleState-xo7F0lbz.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,je={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const we=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,we as __namedExportsOrder,je as default};
