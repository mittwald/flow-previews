import{j as r,r as H}from"./iframe-BmaCy5vn.js";import{M as t}from"./MarkdownEditor-DGGIvuMn.js";import{L as l}from"./Label-C9e3OZeO.js";import{F as K}from"./FieldError-6Obb3s6p.js";import{u as N,F as U,a as Y}from"./Form-BrDOpJsw.js";import{B as g}from"./Button-D_WPZvgQ.js";import{S as G}from"./Section-D1OD6BnF.js";import"./Markdown-U_8Q1TYP.js";import"./CodeBlock-Bjvg6y2e.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DPboJw73.js";import"./IconWarning-HxJndVZz.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./Tooltip-DLSh-NOo.js";import"./utils-BTcDldbE.js";import"./OverlayArrow-DPRWr8HF.js";import"./useFocus-eJJI3D_B.js";import"./ProgressBar-DbkKYMEg.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-aIW9IeHZ.js";import"./context-D74MXKTM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D7fTNmKi.js";import"./useFocusable-BZM-anb5.js";import"./useFocusRing-BIF3mfAv.js";import"./react-children-utilities-gyM1dxU1.js";import"./Action-DY7JPpLy.js";import"./context-unxNYjwy.js";import"./useStatic-CZNYuNH3.js";import"./browser-CHe_8eCl.js";import"./getActionGroupSlot-BjpD5yQ9.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./Heading-DvU7HY66.js";import"./Heading---3yDhu1.js";import"./RSPContexts-BWdUGPyC.js";import"./InlineCode-B0p10lsX.js";import"./Link-tHmjwLpd.js";import"./usePress-D_L0SfOg.js";import"./Separator-DqrT6hzQ.js";import"./Separator-C4UM9Z4C.js";import"./CollectionBuilder-DYux32p_.js";import"./Text-Bb5YosKE.js";import"./EmulatedBoldText-6eMdCTCE.js";import"./Text-DKW9AlZS.js";import"./TextArea-BRIyGVZ4.js";import"./TextFieldBase-WmCwnWcz.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-D4Sebi0C.js";import"./TextField-BuSg5oYg.js";import"./FieldError-DrLNSIg1.js";import"./Form-JYTBzchK.js";import"./Group-BQQ9lk60.js";import"./useTextField-DWi3otFd.js";import"./useFormReset-BOYVXvui.js";import"./ReactAriaControlledValueFix-CiaR6bC2.js";import"./useManagedValue-DbK5u54K.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-ht0ZG28N.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-wePQNGHF.js";import"./ContextMenuSection-3hXHFRCj.js";import"./Dialog-DNzI_GfM.js";import"./Collection-De-LJyRM.js";import"./SearchField-CGzmXx6T.js";import"./useEvent-BVPjBT0Y.js";import"./SelectionManager-YuLIOZci.js";import"./useCollator-BSPhXtyK.js";import"./FocusScope-BP1WICTq.js";import"./VisuallyHidden-CbssR0xZ.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
