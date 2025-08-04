import{r as M,j as r}from"./iframe-CPZzz606.js";import{d as I,e as U,P as a,U as k,n as s,r as A}from"./PasswordCreationField-BWNUhahy.js";import{L as h}from"./Label-B_64PqkQ.js";import{u as K,F as N,a as z}from"./Form-BsuWdJlX.js";import{s as Y}from"./Action-DmKaX5Zg.js";import{B as u}from"./Button-pCBSultP.js";import{m as Z}from"./IconWarning-BPgxt_jx.js";import{C as G}from"./CopyButton-Bi_EJ_o9.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-zYKEm-70.js";import"./utils-hIOiRbRa.js";import"./Text-BoUJhWX_.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C8G6Zc28.js";import"./Hidden-Dc7FsRzF.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocus-C_gNEsKA.js";import"./TextField-DmRYj9dm.js";import"./Form-BILDQ_LX.js";import"./useLabel-z4mqv1Jd.js";import"./Label-NfUS4-fW.js";import"./useTextField-BMmwbaof.js";import"./useFormReset-C84L7XAZ.js";import"./useControlledState-9qfYMj22.js";import"./useFocusable-Ci-OciRZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BAlZ7N7p.js";import"./FieldDescription-BnVwQ09c.js";import"./Text-DzdHITqg.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";import"./Tooltip-Bx2rfSbl.js";import"./OverlayArrow-BDHME5Dc.js";import"./ProgressBar-Bt4eS-sP.js";import"./context-CViJrtm-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./ReactAriaControlledValueFix-DkGPI_QH.js";import"./ContextualHelpTrigger-C0R8jFsn.js";import"./Popover-BrkdeB_0.js";import"./DialogTriggerView-CzpBmyqI.js";import"./context-AQX-vkQB.js";import"./useStatic-Dc3QDw1T.js";import"./Dialog-DwMRnG84.js";import"./Button-Duf2neHD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./RSPContexts-CvcQ69I6.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./SearchField-AT0aPHjw.js";import"./useEvent-7mKEowYR.js";import"./SelectionManager-aTZIig9u.js";import"./useCollator-B1cTbBXX.js";import"./FocusScope-jLRXpVZJ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./Heading-C5GWYBNF.js";import"./Heading-BNuzDqIF.js";import"./getActionGroupSlot-DKujiI-6.js";import"./LoadingSpinner-BcRThk1E.js";import"./react-children-utilities-B_Opc96p.js";import"./onlyText-DHdtUPr3.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return U(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[A.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=k.fromDeclaration(J),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(z,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
