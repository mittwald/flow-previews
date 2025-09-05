import{j as r}from"./iframe-r9Fl_3r-.js";import{M as o}from"./MarkdownEditor-C3PrY2uh.js";import{L as v}from"./Label-DgY637fA.js";import{F as B}from"./FieldError-B_shqPON.js";import{u as I,F as y,a as z}from"./Form-DruQpksO.js";import{B as V}from"./Button-D0ktHzCI.js";import"./Markdown-DzaNQHy5.js";import"./CodeBlock-BZ8ECrza.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DAqlEyxv.js";import"./IconWarning-BUxpotmw.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./Tooltip-k_WJwhMX.js";import"./utils-DXh-iENK.js";import"./OverlayArrow-HXzjk5ZA.js";import"./useFocus-DRS9ufOF.js";import"./ProgressBar-BsRRuR7U.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DoVt-K4x.js";import"./context-B1eqcBF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bxg_NaN0.js";import"./useFocusable-DI-LrkzR.js";import"./useFocusRing-C_G4oYuI.js";import"./react-children-utilities-JlbI5-ew.js";import"./Action-B5PNSonE.js";import"./context-D7mbIFkz.js";import"./useStatic-Dwli2ElM.js";import"./browser-tiRbxzJD.js";import"./getActionGroupSlot-DpUiS5SY.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./Heading-D97qHWnP.js";import"./Heading-BfSyYlEK.js";import"./RSPContexts-Bz7sSPBE.js";import"./InlineCode-B-BzFFad.js";import"./Link-BlXZo4Rj.js";import"./usePress-CjAT5thu.js";import"./Separator-BOM3fr9S.js";import"./Separator-Z9TJ6XEa.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Text-DD-b1p2M.js";import"./EmulatedBoldText-CDsZBMJH.js";import"./Text-DHfFA3io.js";import"./TextArea-Bha8gMnG.js";import"./TextFieldBase-C7xVUfeJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DoaPcd7E.js";import"./TextField-BiW4cyB4.js";import"./FieldError-D3xuSMMg.js";import"./Form-D9IRbY4n.js";import"./Group-BdAgZaYl.js";import"./useTextField-Bg6cyBen.js";import"./useFormReset-DxbIlA0W.js";import"./ReactAriaControlledValueFix-qzhLZtrn.js";import"./LoadingSpinner-zCjOjpaf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4Qe77JoQ.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var w,E,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,j,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var C,k,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var _,D,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Hr as default};
