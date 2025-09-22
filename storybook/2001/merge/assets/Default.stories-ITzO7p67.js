import{j as r,r as H}from"./iframe-DyMBbPqz.js";import{M as t}from"./MarkdownEditor-B8UGqpnj.js";import{L as l}from"./Label-CTeGDG4_.js";import{F as K}from"./FieldError-DTsDdte6.js";import{u as N,F as U,a as Y}from"./Form-Dk1rGsGb.js";import{B as g}from"./Button-BlPqNUGj.js";import{S as G}from"./Section-VQ6ADGlu.js";import"./Markdown-VA3pTxbp.js";import"./CodeBlock-FBOiQBHQ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D6mhKELe.js";import"./IconWarning-ZZpE0RLv.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./Tooltip-DCuTnChb.js";import"./utils-CVBG1xQY.js";import"./OverlayArrow-LvdRNExG.js";import"./useFocus-DU8oSjU-.js";import"./ProgressBar-78wlbF0l.js";import"./Label-BeoFpfOq.js";import"./Hidden-DDXBBs4Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_qDqqXns.js";import"./context-Da3l2mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D80JYNPC.js";import"./useFocusable-DC8rXwC1.js";import"./useFocusRing-vfzYXE-6.js";import"./react-children-utilities-C9DA1KMO.js";import"./Action-BKD54bOg.js";import"./context-57hv7F4C.js";import"./useStatic-D-Em2Ifs.js";import"./browser-n8MK_CxL.js";import"./getActionGroupSlot-D4TTw5G_.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./Heading-CGGLd8uz.js";import"./Heading-DRXAMfzE.js";import"./RSPContexts-BQIv_6Ah.js";import"./InlineCode-Dd4_sIw3.js";import"./Link-k0csAJr-.js";import"./usePress-D3aMe8WM.js";import"./Separator-CvRjl5jJ.js";import"./Separator-VLOdIwGI.js";import"./CollectionBuilder-CRQRCBBG.js";import"./Text-CukGSnAt.js";import"./EmulatedBoldText-xvO4zYSH.js";import"./Text-CM2C2q3t.js";import"./TextArea-CpcQbjTY.js";import"./TextFieldBase-CZ6YkL7C.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-swfEez2j.js";import"./TextField-COySyIxF.js";import"./FieldError-rzK-dnZK.js";import"./Form-XPOYZQVX.js";import"./Group-C7CCq00M.js";import"./useTextField-BufQoHeE.js";import"./useFormReset-BRpdsPso.js";import"./ReactAriaControlledValueFix-CrIU9IZY.js";import"./useManagedValue-lO00UGLb.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-zaoUk7MO.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B4XEqpsk.js";import"./ContextMenuSection-DXhxkGIi.js";import"./Dialog-CGM20lGa.js";import"./Collection-BmjshBTi.js";import"./SearchField-Bdf4_ahw.js";import"./useEvent-65UMilnF.js";import"./SelectionManager-S-Cyaza4.js";import"./useCollator-CddKm6Uk.js";import"./FocusScope-D43MAOt-.js";import"./VisuallyHidden-CSYVn4hw.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
