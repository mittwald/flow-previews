import{j as r,r as H}from"./iframe-d9P-aV0W.js";import{M as t}from"./MarkdownEditor-BX0-4qbA.js";import{L as u}from"./Label-Bkj4txtc.js";import{F as K}from"./FieldError-Bx3miAuV.js";import{u as N,F as U,a as Y}from"./Form-BskI9iRZ.js";import{B as P}from"./Button-B1lQe4CG.js";import{S as G}from"./Section-b7n37lj_.js";import"./Markdown-BXg2MX19.js";import"./CodeBlock-D0UG8z6w.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CcL04kD5.js";import"./IconWarning-BjZlRYlZ.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./Tooltip-DwH_tEDd.js";import"./utils-D3Cd9kCb.js";import"./OverlayArrow-Cjv7HVcg.js";import"./useFocus-Db-Axcue.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJC774kJ.js";import"./context-3d2O_dpD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CiRgye4r.js";import"./useFocusable-CU14CpV2.js";import"./useFocusRing-CufwTJs4.js";import"./react-children-utilities-BlCwl_YJ.js";import"./Action-DTIHrutw.js";import"./context-DNdMdfyQ.js";import"./useStatic-BCruP98g.js";import"./browser-7zjo9sS-.js";import"./getActionGroupSlot-CwmqcSpm.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./Heading-1328N8LH.js";import"./Heading-DqhKHwH3.js";import"./RSPContexts-CIfamJXM.js";import"./InlineCode-BT2uxrIG.js";import"./Link-BeeXtlZl.js";import"./usePress-CdPHlHdZ.js";import"./Separator-CApKESzt.js";import"./Separator-p90sXtPP.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Text-Be7zee3C.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./Text-D1KGOeak.js";import"./TextArea-DzyLFQ9v.js";import"./TextFieldBase-fKHm7IVL.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DYuYYPeA.js";import"./TextField-CBm_F67z.js";import"./FieldError-DZyu-lh_.js";import"./Form-D0Rr0MG7.js";import"./Group-DNqxyc_c.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./ReactAriaControlledValueFix-CSqsGOKF.js";import"./LoadingSpinner-BMYPjKuf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DwY3a-D1.js";import"./ContextMenuSection-B_Ps-rhF.js";import"./Dialog-e74qD_EA.js";import"./Collection-CdCCPlVo.js";import"./SearchField-CGJ3SG_G.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./useCollator-D1fE0zhK.js";import"./FocusScope-Bqouiiv6.js";import"./VisuallyHidden-D6ugaIjO.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
