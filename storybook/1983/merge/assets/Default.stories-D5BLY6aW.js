import{j as r,r as H}from"./iframe-Bok6IQju.js";import{M as t}from"./MarkdownEditor-BSAP-FEy.js";import{L as u}from"./Label-DIH0HQY4.js";import{F as K}from"./FieldError-BsA8nwGX.js";import{u as N,F as U,a as Y}from"./Form-BQ-uy_-H.js";import{B as P}from"./Button-I2NsynHm.js";import{S as G}from"./Section-Cc1NhCKR.js";import"./Markdown-YkmT0vbf.js";import"./CodeBlock-Dun_oeos.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DJDcKv09.js";import"./IconWarning-DqBq2uRB.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./Tooltip-9kNNDfqd.js";import"./utils-Cq7OaFeW.js";import"./OverlayArrow-_F5PaUR8.js";import"./useFocus-DQozoN0B.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./context-BMAErJH4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B8rFPIj3.js";import"./useFocusable-BDCwijNy.js";import"./useFocusRing-Crdxdr5c.js";import"./react-children-utilities-BH56-EuO.js";import"./Action-Dn54AUS5.js";import"./context-BE37SzUM.js";import"./useStatic-CXnTBCs5.js";import"./browser-g58G47PZ.js";import"./getActionGroupSlot-Dxq8Ia-H.js";import"./dynamic-BxA90To4.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./Heading-CZgaWX2U.js";import"./Heading-5Y7g4Kq0.js";import"./RSPContexts-DI5gwLuS.js";import"./InlineCode-xhleBRUM.js";import"./Link-DP9F-20c.js";import"./usePress-DGEniIzO.js";import"./Separator-DCmIWm1S.js";import"./Separator-BrmCJU2D.js";import"./CollectionBuilder-DE8Itz9_.js";import"./Text-BAsYg4gL.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";import"./TextArea-DQ89Bp_A.js";import"./TextFieldBase-REby52j1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DvxvWfMm.js";import"./TextField-B7RWcShV.js";import"./FieldError-MhOXyUFr.js";import"./Form-COiMNxjB.js";import"./Group-_2KGjRtF.js";import"./useTextField-B52zV2BM.js";import"./useFormReset-BWLOy0Jx.js";import"./ReactAriaControlledValueFix-DhxsPYAe.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CmhZDz7g.js";import"./ContextMenuSection-1jp9gybG.js";import"./Dialog-CcOFZkKF.js";import"./Collection-DLNYYfFu.js";import"./SearchField-Dn82cF-B.js";import"./useEvent-Byqgoyh2.js";import"./SelectionManager-YV1jDUXg.js";import"./useCollator-DW_vDOK-.js";import"./FocusScope-BqlGKiq6.js";import"./VisuallyHidden-C0tUvQRs.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,F,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,R,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      </Form>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var I,z,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,q,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ge=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,a as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,n as WithLabel,d as WithOnChange,l as WithRef,ge as __namedExportsOrder,he as default};
