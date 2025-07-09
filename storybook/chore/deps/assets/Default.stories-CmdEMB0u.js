import{j as r,r as P}from"./iframe-DdrpCK7O.js";import{P as t,a as b,s as e,c as w}from"./PasswordCreationField-B7to965W.js";import{L as u}from"./Label-icuqrMlJ.js";import{u as y,F as g,a as f}from"./Form-D3UfobUI.js";import{s as C}from"./Action-gNhXMKos.js";import{B as d}from"./Button-DMAlCpIp.js";import{m as F}from"./IconWarning-lf4U_i6L.js";import{C as j}from"./CopyButton-B2GS83iC.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-ENGkQJvk.js";import"./utils-jbl8fYpp.js";import"./Text-Diya8EQq.js";import"./filterDOMProps-CrrfCvhk.js";import"./Group-7fH98enb.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocus-DysN_qPg.js";import"./Input-BQD-OzUK.js";import"./Hidden-YoIeoCE-.js";import"./TextField-l3Z8KRyH.js";import"./Form-BaMTKeVV.js";import"./useLabel-BGrVe235.js";import"./Label-q6ExZamY.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./useControlledState-N3OdDP8Q.js";import"./useFocusable-CpPH01B7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CvYAv6kd.js";import"./FieldDescription-Bk8ggkBm.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./Tooltip-DbVuKibB.js";import"./OverlayArrow-Igqyksxq.js";import"./ProgressBar-DX53PXke.js";import"./context-BHbmanCt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./ReactAriaControlledValueFix-DfJe_EDn.js";import"./context-CvEBZO7B.js";import"./useStatic-BgXEq_zL.js";import"./ContextualHelpTrigger-BAGLEiRB.js";import"./Popover-BNdbeYA0.js";import"./DialogTriggerView-B77w19zZ.js";import"./Dialog-B-Srzcok.js";import"./Button-TD7SThT2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./RSPContexts-C1d3DcZT.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./SearchField-Noy99wMh.js";import"./SelectionManager-D2bv-DGd.js";import"./useEvent-Bo6FRXFm.js";import"./useCollator-uOsZKEYD.js";import"./FocusScope-DAuqHH8A.js";import"./VisuallyHidden--_7cmU_k.js";import"./Heading-B9Rdq3ni.js";import"./Heading-C9nmxDWk.js";import"./getActionGroupSlot-D7vgPX0T.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./react-children-utilities-CZDS_T2I.js";import"./onlyText-5reXy_yA.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,S={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[w.number],maxLength:2},{ruleType:e.regex,pattern:"[A-B]",min:1,max:2},{ruleType:e.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:e.hibp},{identifier:"special",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Kr={title:"Form Controls/PasswordCreationField",component:t,render:o=>r.jsx(t,{onChange:B("onChange"),...o,children:r.jsx(u,{children:"Password"})})},a={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(t,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:r.jsx(F,{})})]})},c={render:()=>{const o=b.fromDeclaration(S),s=y({defaultValues:{password:""}});return r.jsxs(g,{form:s,onSubmit:async()=>await C(2e3),children:[r.jsx(f,{rules:{required:!0},name:"password",children:r.jsxs(t,{validationPolicy:o,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(d,{onPress:()=>s.reset(),children:"Reset"}),r.jsx(d,{type:"submit",children:"Submit"})]})}},l={render:o=>{const[s,h]=P.useState("");return r.jsxs(t,{onChange:x=>h(x),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(j,{text:s})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...l.parameters?.docs?.source}}};const Nr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{a as Default,i as Disabled,n as Required,l as WithCopyButton,p as WithCustomButtons,c as WithForm,m as WithPlaceholder,Nr as __namedExportsOrder,Kr as default};
