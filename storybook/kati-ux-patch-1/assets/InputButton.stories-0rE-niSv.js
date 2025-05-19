import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{A as t}from"./Align-D8QutVSH.js";import{T as l}from"./TextField-BDFJllcH.js";import{L as i}from"./Label-CvAEyXQc.js";import{B as o}from"./Button-nLOUeIYJ.js";import y from"./Default.stories-DSlDmSBY.js";import{N as w}from"./NumberField-BQ1kTcEq.js";import{T as D}from"./TextArea-BcCR7dsf.js";import{S as E}from"./CountryOptions-DzCVrrYb.js";import{O as d}from"./Option-BxJvW6TB.js";import{u as _,F as I}from"./Form-Bf7-XU2T.js";import{s as R}from"./Action-BcHXQegi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./TextFieldBase-YyHHvKti.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Bhr3DTnb.js";import"./IconWarning-C_dXgkkz.js";import"./FieldError-BNWc2UXg.js";import"./utils-C22QCCbL.js";import"./Text-PWuSNm-G.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-t1_GWMpp.js";import"./Text-acTHRGjJ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./Form-Ce06eXuO.js";import"./useLabel-Bwhd-XGR.js";import"./Input-CjZe9lfS.js";import"./Hidden-DwT0szmK.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocus-DQVi-kHM.js";import"./Label-DKfobBxX.js";import"./useTextField-CU3Xanqw.js";import"./useFormReset-Cri5RZCQ.js";import"./useControlledState-DjePt-lg.js";import"./useFocusable-7WyUSQpO.js";import"./useFormValidation-Ck8Kc0sM.js";import"./LoadingSpinner-BoRooXD5.js";import"./Button-CvRwfedC.js";import"./ProgressBar-CWMH1Kpx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./Avatar-Degma3og.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-BdwLlPvh.js";import"./Initials-DkyAl2-Q.js";import"./onlyText-Btijrq19.js";import"./Group-CyniWcbG.js";import"./useSpinButton-B6cV2G6J.js";import"./useEvent-DKzf63YQ.js";import"./OverlayTrigger-BTBIJI77.js";import"./context-Ci9m7_Nm.js";import"./useStatic-Dvh5S8aV.js";import"./Dialog-BroBw1Jq.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CZdmdrug.js";import"./Collection-BAXYBWcT.js";import"./CollectionBuilder-BP3fHMQL.js";import"./Separator-_mK8Veof.js";import"./SelectionManager-DyB3dcXv.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dbmrpk-6.js";import"./DragAndDrop-D7p6EfW_.js";import"./useListState-JTeUtzht.js";import"./useSingleSelectListState-BsAZ6xtx.js";import"./Popover-AxYiZSJV.js";import"./DialogTriggerView-CXGvpI3a.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DApccOIm.js";const le={...y,title:"Structure/Align/Input + Button",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:r.jsx(i,{children:"Mail address"})}),r.jsx(o,{children:"Hinzufügen"})]})},n={},p={render:e=>r.jsxs(t,{...e,children:[r.jsx(w,{children:r.jsx(i,{children:"Number"})}),r.jsx(o,{children:"Hinzufügen"})]})},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(D,{children:r.jsx(i,{children:"Message"})}),r.jsx(o,{children:"Hinzufügen"})]})},m={render:e=>r.jsxs(t,{...e,children:[r.jsxs(E,{children:[r.jsx(i,{children:"Options"}),r.jsx(d,{children:"Option 1"}),r.jsx(d,{children:"Option 2"})]}),r.jsx(o,{children:"Hinzufügen"})]})},a={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{}),r.jsx(o,{children:"Hinzufügen"})]})},c={render:e=>{const M=_();return r.jsx(I,{form:M,onSubmit:async()=>await R(2e3),children:r.jsxs(t,{...e,children:[r.jsx(l,{children:r.jsx(i,{children:"Mail address"})}),r.jsx(o,{type:"submit",children:"Hinzufügen"})]})})}};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,j;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <NumberField>
        <Label>Number</Label>
      </NumberField>
      <Button>Hinzufügen</Button>
    </Align>
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,A,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <TextArea>
        <Label>Message</Label>
      </TextArea>
      <Button>Hinzufügen</Button>
    </Align>
}`,...(F=(A=s.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var S,B,O;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <Select>
        <Label>Options</Label>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </Select>
      <Button>Hinzufügen</Button>
    </Align>
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,z,H;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Align {...props}>
      <TextField />
      <Button>Hinzufügen</Button>
    </Align>
}`,...(H=(z=a.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var T,W,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Align {...props}>
          <TextField>
            <Label>Mail address</Label>
          </TextField>
          <Button type="submit">Hinzufügen</Button>
        </Align>
      </Form>;
  }
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const de=["Default","WithNumberField","WithTextArea","WithSelect","WithoutLabel","WithForm"];export{n as Default,c as WithForm,p as WithNumberField,m as WithSelect,s as WithTextArea,a as WithoutLabel,de as __namedExportsOrder,le as default};
