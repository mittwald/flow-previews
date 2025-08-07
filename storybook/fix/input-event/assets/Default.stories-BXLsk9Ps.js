import{r as M,j as r}from"./iframe-H6s4LegX.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-DGcP8uqJ.js";import{L as h}from"./Label-BPnhZAtM.js";import{u as N,F as z,a as U}from"./Form-MK6dmpNR.js";import{s as Y}from"./Action-VE09ntJM.js";import{B as u}from"./Button-BfyS9OW4.js";import{m as Z}from"./IconWarning-BOAgarfH.js";import{C as G}from"./CopyButton-CH3EDOFl.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dt9y-hnT.js";import"./utils-UMD8tMdI.js";import"./Text-W_tYTgvJ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cl4o1nBF.js";import"./Hidden-Di30YZNr.js";import"./useFocusRing-BEqBdngR.js";import"./useFocus-CgMx6KCt.js";import"./TextField-2cDCflSd.js";import"./Form-DQJn-VxA.js";import"./useLabel-BPkUN2gP.js";import"./Label-CKpM-ud8.js";import"./useTextField-D6v9RXcK.js";import"./useFormReset-iDdXzUQ2.js";import"./useControlledState-CVjmrtmN.js";import"./useFocusable-C_460OjJ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-HR0koHM9.js";import"./FieldDescription-CYV9rp28.js";import"./Text-Wzcs2ORX.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";import"./Tooltip-DDBDZ3a5.js";import"./OverlayArrow-CJ9pmdXw.js";import"./ProgressBar-D5gyotl2.js";import"./context-ByOQKEDv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./ReactAriaControlledValueFix-D11w85dl.js";import"./ContextualHelpTrigger-4O67_73m.js";import"./Popover-By6BH1UV.js";import"./DialogTriggerView-D6-ZN5ak.js";import"./context-ByVpJXr1.js";import"./useStatic-DkayqYPl.js";import"./Dialog-CNl9Rue_.js";import"./Button-D43Lcc_s.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B_R4nnaN.js";import"./RSPContexts-B4jRuJIy.js";import"./Collection-C7wh_wcR.js";import"./CollectionBuilder-D60ucnzT.js";import"./Separator-BxffjzOt.js";import"./SearchField-DznnLjI8.js";import"./useEvent-B4EMUzkK.js";import"./SelectionManager-CXLxGtrQ.js";import"./useCollator-5lRk6LtQ.js";import"./FocusScope-BRfTPPDJ.js";import"./VisuallyHidden-BsO4eIaj.js";import"./Heading-40nVHR7j.js";import"./Heading-DpGChV-N.js";import"./getActionGroupSlot-CgS0DVys.js";import"./LoadingSpinner-BtBwTXqe.js";import"./react-children-utilities-CyGj-kdp.js";import"./onlyText-CxMxKqtz.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
