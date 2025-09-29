import{j as r,r as H}from"./iframe-CP2gb4h4.js";import{M as t}from"./MarkdownEditor-DLtUqVNM.js";import{L as l}from"./Label-Bjeja2lg.js";import{F as K}from"./FieldError-CTYByr6I.js";import{u as N,F as U,a as Y}from"./Form-CPdZ6NEz.js";import{B as g}from"./Button-D4XL1rEM.js";import{S as G}from"./Section-CWQqQqHK.js";import"./index-Cun1SEai.js";import"./Markdown-D0ALip5Q.js";import"./CodeBlock-B7WRgBgM.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DKE5YhTW.js";import"./IconWarning-D-rMLbvq.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./index-Cu5Se3_L.js";import"./Tooltip-DG8zv9gS.js";import"./ClearPropsContextView-YbrwDHkX.js";import"./utils-D_s8y5un.js";import"./OverlayArrow-DcwP4WPp.js";import"./useFocus-DJT_GDyJ.js";import"./ProgressBar-antzpYY8.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-INWae1Ce.js";import"./context-BA56fXp2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-4L3XIdhl.js";import"./useFocusable-B9L3OVB4.js";import"./useFocusRing-B2VMeUUD.js";import"./react-children-utilities-xn1Qk8eq.js";import"./Action-BlPiRLea.js";import"./context-DCT4qJcM.js";import"./useStatic-B6aSEDsB.js";import"./browser-Cy2PTbDb.js";import"./getActionGroupSlot-BJG8VOJK.js";import"./dynamic-BzAgy5gg.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./Heading-BHZCyk50.js";import"./Heading-p8z_hoTT.js";import"./RSPContexts-CjMIBS3_.js";import"./InlineCode-PI6QEh8Z.js";import"./Link-CILbJhld.js";import"./usePress-B35msVos.js";import"./Separator-CMVvMoil.js";import"./Separator-DiCclCCI.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./Text-D1BFrV-v.js";import"./EmulatedBoldText-DPtC43a-.js";import"./Text-CxBtgOGW.js";import"./TextArea-XDxY9NgP.js";import"./TextFieldBase-DuQBRhIs.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Bo22LU1X.js";import"./TextField-DU8gOWaW.js";import"./FieldError-DU2mNmYP.js";import"./context-ScZH95Xu.js";import"./Form-BiW8oAj_.js";import"./Group-DgudsDcS.js";import"./Input-BVND2dLL.js";import"./useTextField-D-ukG109.js";import"./useFormReset-DVyobQZd.js";import"./useFormValidation-D0HOvZ_-.js";import"./ReactAriaControlledValueFix-BQYXCjP1.js";import"./useManagedValue-BkwGnAwb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CCoJakpE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BqMMv05B.js";import"./ContextMenuSection-DLwH6dLj.js";import"./Dialog-BATijwiU.js";import"./Collection-O2YnEgLD.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./useCollator-CVHtnlLz.js";import"./FocusScope-8zrVT8FZ.js";import"./VisuallyHidden-GZJ9Ibhy.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Se={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Ee=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Ee as __namedExportsOrder,Se as default};
