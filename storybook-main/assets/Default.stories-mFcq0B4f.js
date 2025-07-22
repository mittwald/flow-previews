import{r as E,j as r}from"./iframe-DR0piQh8.js";import{d as A,e as I,P as a,a as K,s,c as M}from"./PasswordCreationField-kZwqwSz1.js";import{L as h}from"./Label-BflZTkh8.js";import{u as N,F as z,a as U}from"./Form-CHoSOKFG.js";import{s as Y}from"./Action-CNI9x9AO.js";import{B as u}from"./Button-YikxumGf.js";import{m as Z}from"./IconWarning-BgT_B94B.js";import{C as $}from"./CopyButton-BTVvf24g.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DwuKV3Gh.js";import"./utils-B_3T_k5x.js";import"./Text-Me8NF-Lu.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-C4Z-pBhO.js";import"./useFocusRing-DNATWZb5.js";import"./useFocus-Drlqt-a_.js";import"./Input-DGCSbbdR.js";import"./Hidden-Ccv39zY0.js";import"./TextField-CeU2qgF-.js";import"./Form-B6wqL0ga.js";import"./useLabel-dFBcJ0PQ.js";import"./Label-DF_i3q4X.js";import"./useTextField-B-D6SiAk.js";import"./useFormReset-DGc_F2ms.js";import"./useControlledState-DHSSOs10.js";import"./useFocusable-CKOeQoF-.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BkSA8Wen.js";import"./FieldDescription-Co8Bhrn3.js";import"./Text-6uPYoec8.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";import"./Tooltip-BvUPZjoZ.js";import"./OverlayArrow-4l6fdOKa.js";import"./ProgressBar-NTw_CuGV.js";import"./context-BuOVuQqB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./ReactAriaControlledValueFix-CS6-4LoM.js";import"./context-BdW5YDeU.js";import"./useStatic-DJ0ktc6X.js";import"./ContextualHelpTrigger-DATQfxBx.js";import"./Popover-DipyulJr.js";import"./DialogTriggerView-BFIY75rz.js";import"./Dialog-D78Vapha.js";import"./Button-1sXVFcCN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B4R9EPAI.js";import"./RSPContexts-BmbbCtV6.js";import"./Collection-CwV6zAW0.js";import"./CollectionBuilder-D0nds9w3.js";import"./Separator-DSMvoxad.js";import"./SearchField-CvXwi28e.js";import"./SelectionManager-Bk9G3wL6.js";import"./useEvent-DS0BHrpr.js";import"./useCollator-M--gojr_.js";import"./FocusScope-QqKO2Hp7.js";import"./VisuallyHidden-XA-B9eQQ.js";import"./Heading-Dl4Rh0-m.js";import"./Heading-Boa0iipQ.js";import"./getActionGroupSlot-yJrAi_UC.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./react-children-utilities-tzCwGXfI.js";import"./onlyText-CaTkBqXj.js";const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return I(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},ce={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},c={render:()=>{const e=K.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async()=>await Y(2e3),children:[r.jsx(U,{rules:{required:!0,validate:k(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},l={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx($,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,l as WithCopyButton,d as WithCustomButtons,c as WithForm,p as WithPlaceholder,le as __namedExportsOrder,ce as default};
