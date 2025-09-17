import{j as r,r as H}from"./iframe-BAGTntfB.js";import{M as t}from"./MarkdownEditor-DRyFebqY.js";import{L as l}from"./Label-f9Yl8NxA.js";import{F as K}from"./FieldError-CzxDQYV0.js";import{u as N,F as U,a as Y}from"./Form-CY4BaXMY.js";import{B as g}from"./Button-ClQyukEh.js";import{S as G}from"./Section-ytSv1zvn.js";import"./Markdown-W4_dNjdu.js";import"./CodeBlock-clSngY3x.js";import"./clsx-B-dksMZM.js";import"./CopyButton-5APNpDz-.js";import"./IconWarning-SECJkQke.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./Tooltip-BUysOg5h.js";import"./utils-DSdQ5U5C.js";import"./OverlayArrow-CIJbDC1X.js";import"./useFocus-kqlw9bYS.js";import"./ProgressBar-yPlEiM2Y.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jLc0StSH.js";import"./context-C8vSVPtT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-hqI-vqoJ.js";import"./useFocusable-CvI8LjKe.js";import"./useFocusRing-uRy9P7F2.js";import"./react-children-utilities-DXBRBUvV.js";import"./Action-BhAAiBfS.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./browser-D8tJ8M3I.js";import"./getActionGroupSlot-Bf03GRoZ.js";import"./dynamic-DicyFJZ2.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./Heading-B2joHeSr.js";import"./Heading-qcJaN4U_.js";import"./RSPContexts-u_LIQrA5.js";import"./InlineCode-vI_caq8c.js";import"./Link-BXUK7PeU.js";import"./usePress-BeTrTVD4.js";import"./Separator-BPzGOy-m.js";import"./Separator-BoyfOubv.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Text-oSCAFhn5.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./Text-CZggwRKM.js";import"./TextArea-dr1yOdNm.js";import"./TextFieldBase-BRIixs5H.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BTtZPQbf.js";import"./TextField-CGb-3Yan.js";import"./FieldError-DwSlV6wI.js";import"./Form-BImra2vo.js";import"./Group-CQeggyQD.js";import"./useTextField-aRRnCdTt.js";import"./useFormReset-DMVQ-F_N.js";import"./ReactAriaControlledValueFix-Bf896QU8.js";import"./useManagedValue-Ceuh4DB4.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DuAh__4X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DldLr0Dh.js";import"./ContextMenuSection-BeQzdxEY.js";import"./Popover-DIu09GMY.js";import"./DialogTriggerView-BimJk9-6.js";import"./FocusScope-Dx9vsLFf.js";import"./useCollator-C2nKvxEE.js";import"./VisuallyHidden-CCDJ4X70.js";import"./Collection-CyU2lrEr.js";import"./SearchField-BATSQzLF.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";import"./Switch-DxFGgU8l.js";import"./useToggleState-B4DVcZDp.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Se=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Se as __namedExportsOrder,Me as default};
