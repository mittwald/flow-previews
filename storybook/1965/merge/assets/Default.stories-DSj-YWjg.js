import{j as r,r as H}from"./iframe-ybIflQI0.js";import{M as t}from"./MarkdownEditor-DtagXkrn.js";import{L as u}from"./Label-D6VCnmf_.js";import{F as K}from"./FieldError-NwAdK0dF.js";import{u as N,F as U,a as Y}from"./Form-B4smknOt.js";import{B as P}from"./Button-VpIHCJ_t.js";import{S as G}from"./Section-CbKDwiGh.js";import"./Markdown-CVGyGudc.js";import"./CodeBlock-DPNgyUXW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DQip5Jd3.js";import"./IconWarning-4calfh7J.js";import"./PropsContextProvider-Dby21Boo.js";import"./mergeRefs-CrLlo2X9.js";import"./index-DwvqtJ63.js";import"./Tooltip-CO4ZYKPT.js";import"./utils-DwLBuKNl.js";import"./OverlayArrow-D5ITEh8W.js";import"./useFocus-FOKKrJ32.js";import"./ProgressBar-BI13LgYi.js";import"./Label-dqzpDUen.js";import"./Hidden-DQD7tqWN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-OuLiew89.js";import"./context-D69S0q1x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BVmYQtS6.js";import"./useFocusable-D9slAbEH.js";import"./useFocusRing-DmeoHCon.js";import"./react-children-utilities-ChBQYGyG.js";import"./Action-CNi-ghwN.js";import"./context-cR8QzHfh.js";import"./useStatic-CBdef3Wq.js";import"./browser-BlU6H4Cg.js";import"./getActionGroupSlot-CImKUmyK.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Dy9YCgnm.js";import"./Heading-D42xUANC.js";import"./Heading-D-wBWx4k.js";import"./RSPContexts-18Yw4rTl.js";import"./InlineCode-BawM1fVT.js";import"./Link-DQPFgx-Y.js";import"./usePress-BBpVmfp-.js";import"./Separator-CDrSvt0n.js";import"./Separator-DelM8Vlp.js";import"./CollectionBuilder-CIbJownJ.js";import"./Text-CrQihJYy.js";import"./EmulatedBoldText-Cg6573Jk.js";import"./Text-BtP71xLD.js";import"./TextArea-B0QvLkJa.js";import"./TextFieldBase-GMxRW1A9.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DnwWH4Ws.js";import"./TextField--sxCbEe1.js";import"./FieldError-C5asJdTF.js";import"./Form-CSA4Adn7.js";import"./Group-vP_Qg5M8.js";import"./useTextField-ClpDCKui.js";import"./useFormReset-B-8-_0w7.js";import"./ReactAriaControlledValueFix-BANhqdAH.js";import"./LoadingSpinner-DYvsivqr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bsxotqki.js";import"./ContextMenuSection-D4VjSJDg.js";import"./Dialog-sjXOwmAJ.js";import"./Collection-BzQkilIm.js";import"./SearchField-CmuGphBb.js";import"./useEvent-BtRl6L9d.js";import"./SelectionManager-BKQdldWX.js";import"./useCollator-D-IRcrcA.js";import"./FocusScope-Ogf1gBEU.js";import"./VisuallyHidden-DZp-AQjS.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
