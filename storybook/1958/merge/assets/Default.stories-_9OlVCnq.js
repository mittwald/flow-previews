import{j as r}from"./iframe-BAzLYubM.js";import{M as o}from"./MarkdownEditor-6_61DrT-.js";import{L as l}from"./Label-D53E6W3R.js";import{F as V}from"./FieldError-Cejs8W8V.js";import{u as q,F as P,a as T}from"./Form-Dv2e63Wc.js";import{B as A}from"./Button-DJgbNtOP.js";import"./Markdown-3oXBuSfC.js";import"./CodeBlock-CefIcSZ8.js";import"./clsx-B-dksMZM.js";import"./CopyButton-qrBFag1D.js";import"./IconWarning-C8vW1cGr.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./Tooltip-C21iyvQ2.js";import"./utils-b3dZQxDg.js";import"./OverlayArrow-DVbPN0at.js";import"./useFocus-DNlriqLN.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Fj3twa-e.js";import"./context-dTk8Xbgu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Ca8ITVoa.js";import"./useFocusable-B5cC5QAy.js";import"./useFocusRing-BpLfAbDy.js";import"./react-children-utilities-NfhIHob9.js";import"./Action-CEiZST8d.js";import"./context-Cca8XENB.js";import"./useStatic-Ck2rgCkC.js";import"./browser-CzeCNbOa.js";import"./getActionGroupSlot-wdi100NC.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./Heading-CohMeiqD.js";import"./Heading-crohW3Dr.js";import"./RSPContexts-DL_RbNY6.js";import"./InlineCode-CaHrTtvR.js";import"./Link-Cot2seqI.js";import"./usePress-DP_wKln7.js";import"./Separator-BtzBSy7w.js";import"./Separator-CRdY-Wkq.js";import"./CollectionBuilder-B31VuGbq.js";import"./Text-CjPbBUZt.js";import"./EmulatedBoldText-saOgMaUw.js";import"./Text-BrSTDiHS.js";import"./TextArea-DIw3pzms.js";import"./TextFieldBase-D6dDbRtt.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DXJ1TO7X.js";import"./TextField-RDj9bqu6.js";import"./FieldError-CY1AiRgy.js";import"./Form-VFHeLX6B.js";import"./Group-C36tMHps.js";import"./useTextField-9L1zHPzc.js";import"./useFormReset-BLDHXQeI.js";import"./ReactAriaControlledValueFix-B9YsNFT5.js";import"./LoadingSpinner-BkZn8ran.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DEcgbODe.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,S,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,L,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,v,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(O=(v=p.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var R,_,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,I,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange"];export{t as Default,a as Disabled,p as Resizeable,n as ShowCharacterCount,m as WithFieldError,d as WithForm,i as WithLabel,c as WithOnChange,$r as __namedExportsOrder,Zr as default};
