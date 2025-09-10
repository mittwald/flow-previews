import{j as r,r as H}from"./iframe-DE1y3h6K.js";import{M as t}from"./MarkdownEditor-DUOGDpwJ.js";import{L as u}from"./Label-DZ4SmxIN.js";import{F as K}from"./FieldError-BK11cMw9.js";import{u as N,F as U,a as Y}from"./Form-DL6pgiec.js";import{B as P}from"./Button-BA8n91r_.js";import{S as G}from"./Section-DnJXdeIl.js";import"./Markdown-fGPfyMoO.js";import"./CodeBlock-B7sXToKr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dzmo9CDj.js";import"./IconWarning-DpK9giyz.js";import"./PropsContextProvider-BpZWWW7m.js";import"./mergeRefs-D0m4vR-q.js";import"./index-jyJWLiYa.js";import"./Tooltip-sSell0S3.js";import"./utils-BuwGAin4.js";import"./OverlayArrow-DXOomu3A.js";import"./useFocus-CKbJThq3.js";import"./ProgressBar-csi_2Tv3.js";import"./Label-TbKyKJmZ.js";import"./Hidden-C76LoNo0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CHbXUtSy.js";import"./context-Bl9QONje.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BK9gxWse.js";import"./useFocusable-BnAo6gfc.js";import"./useFocusRing-BkyGtUZS.js";import"./react-children-utilities-DjTpbr5y.js";import"./Action-COIyfA7V.js";import"./context-BCgJ5YhY.js";import"./useStatic-DRwOE5Oc.js";import"./browser-Ts-qWG1Z.js";import"./getActionGroupSlot-CWsUflea.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CrSxeSmc.js";import"./Heading-xbSxOyJx.js";import"./Heading-drBmrR5i.js";import"./RSPContexts-CDFoiued.js";import"./InlineCode-DzjAy87A.js";import"./Link-DghxtxnE.js";import"./usePress-W2Z88hDR.js";import"./Separator-6rBOrYgj.js";import"./Separator-CBnMPT0A.js";import"./CollectionBuilder-CoWtYmY0.js";import"./Text-pSa9QdzY.js";import"./EmulatedBoldText-1IxUiC0B.js";import"./Text-BKZgNBXV.js";import"./TextArea-CISbQrhk.js";import"./TextFieldBase-CdEIwjRn.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DHBL5w3k.js";import"./TextField-0H-e0Syb.js";import"./FieldError-DorlsVNp.js";import"./Form-BpLNV-sf.js";import"./Group-BoarCDIk.js";import"./useTextField-CCT8yJoF.js";import"./useFormReset-CxooHmiE.js";import"./ReactAriaControlledValueFix-DOpwdcg4.js";import"./LoadingSpinner-rp2WIybp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7wfEB9A.js";import"./ContextMenuSection-D1uTl_fe.js";import"./Dialog-CprkWIxR.js";import"./Collection-D0DOys5j.js";import"./SearchField-Vb_1m6nE.js";import"./useEvent-B3QERrau.js";import"./SelectionManager-s_1JWMgA.js";import"./useCollator-BUMRQKLH.js";import"./FocusScope-Ch4ZrNXF.js";import"./VisuallyHidden-BAMDsQjq.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
