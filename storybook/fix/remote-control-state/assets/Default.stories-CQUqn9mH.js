import{r as E,j as r}from"./iframe-C4UjBIAn.js";import{d as A,e as I,P as a,a as K,s,c as M}from"./PasswordCreationField-iQK90rqZ.js";import{L as h}from"./Label-Dvf2CIG9.js";import{u as N,F as z,a as U}from"./Form-CVaCua1H.js";import{s as Y}from"./Action-DIvU2Ms_.js";import{B as u}from"./Button-5hDgeu62.js";import{m as Z}from"./IconWarning-CY0XRw6B.js";import{C as $}from"./CopyButton-gblVPPe4.js";import"./PropsContextProvider-87DwQ7Go.js";import"./mergeRefs-COMEUDHn.js";import"./index-CmrBj9gN.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-V3TTSJrT.js";import"./utils-BLjaUoJs.js";import"./Text-CPgcCMNB.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DVLbnFER.js";import"./useFocusRing-D6tBYznr.js";import"./useFocus-BmYsiZmy.js";import"./Input-DYzTUFv2.js";import"./Hidden-DuKiE2Vy.js";import"./TextField-_WSxaHpd.js";import"./Form-DZkb495z.js";import"./useLabel-BsCfOrtV.js";import"./Label-DUd9oGhN.js";import"./useTextField-CYEprWqj.js";import"./useFormReset-DguyA7pD.js";import"./useControlledState-Cate5U5n.js";import"./useFocusable-DY-8mdaw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CnWpy5EF.js";import"./FieldDescription-CcoE_xxu.js";import"./Text-Cl3jjQuQ.js";import"./browser-DTcMqGMW.js";import"./EmulatedBoldText-CM9vl5us.js";import"./Tooltip-D_VMnAHl.js";import"./OverlayArrow-BK55VNdR.js";import"./ProgressBar-BsRzG7g3.js";import"./context-DFK0WUvU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bj3RA7TV.js";import"./ReactAriaControlledValueFix-BXLjxrpu.js";import"./context-B9xA30OO.js";import"./useStatic-DYGmZoo-.js";import"./ContextualHelpTrigger-DU7m7aBN.js";import"./Popover-Dee7e1-Y.js";import"./DialogTriggerView-C4tTcH16.js";import"./Dialog-Tiii-4pl.js";import"./Button-5rCQqSRQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B9Tj2Vkc.js";import"./RSPContexts-CIyyPXTw.js";import"./Collection-YaGs-Nx7.js";import"./CollectionBuilder-BzI9Vgxs.js";import"./Separator-plBA_LWS.js";import"./SearchField-BVimEZR8.js";import"./SelectionManager-DBmgSDBD.js";import"./useEvent-tf06nvNZ.js";import"./useCollator-DRqhDAuW.js";import"./FocusScope-BprNCpdJ.js";import"./VisuallyHidden-DfrTtOS_.js";import"./Heading-tEwIaik0.js";import"./Heading-DhTfsAKW.js";import"./getActionGroupSlot-Cs6H9gb3.js";import"./LoadingSpinner-BzraVxPM.js";import"./react-children-utilities-QXDY9De-.js";import"./onlyText-YXLCVjvk.js";const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return I(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},p={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},l={render:()=>{const e=K.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async()=>await Y(2e3),children:[r.jsx(U,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx($,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var F,b,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,p as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,m as WithPlaceholder,ce as __namedExportsOrder,le as default};
