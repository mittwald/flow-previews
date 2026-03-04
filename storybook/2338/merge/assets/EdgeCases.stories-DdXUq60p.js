import{r as s,j as o}from"./iframe-CBpAxFwW.js";import{M as n}from"./Modal-DexcMb-i.js";import{B as i}from"./Button-DJILh_tx.js";import a from"./Default.stories-iR_mkMWP.js";import{C as c}from"./Content-D1nnPCvX.js";import{S as d}from"./Section-7R7SCXQ7.js";import{T as l}from"./Text-DmIlada7.js";import{A as u}from"./ActionGroup-CIZlagD5.js";import{T as x}from"./TextField-O3WXJJAC.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-MOWZhQDK.js";import{A as h}from"./ActionBatch-BgON7N4c.js";import{L as z}from"./Label-D9Ki8i5H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./utils-DlBHsIHw.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./context-BCPYrVw6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./ModalTrigger-Ci3MDFMS.js";import"./OverlayTrigger-BoEnaKfv.js";import"./DialogTriggerView-iLVIyfJi.js";import"./lib-BWgNPlW4.js";import"./ResetButton-DdOkIqmb.js";import"./FieldError-0XXNPrVk.js";import"./FieldError-Bok8s5mY.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";import"./ActionGroupView-CGPpf-UN.js";import"./useRef-DPhMCXJT.js";import"./browser-Bc0l3UGu.js";import"./ColumnLayout-CH0RCE87.js";import"./AccentBox-D_r_giBk.js";import"./Radio-C2IlDcW6.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useMakeFocusable-QBFUqWJs.js";import"./RadioGroup-B7ctDHh9.js";import"./Form-AlqHr7_t.js";import"./useFormValidation-D1j-Spao.js";import"./useFormReset-DcIaZXr3.js";import"./RadioButton-CXuv9ThG.js";import"./DatePicker-BbIE5dPD.js";import"./DateInput-DThqx0xn.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useSpinButton-D6KrnP9n.js";import"./useFilter-Cou16l0M.js";import"./Popover-CbjXFr2h.js";import"./RangeCalendar-DsNW_RXc.js";import"./Heading-CaCePfIe.js";import"./useUpdateEffect-CKFk_BI5.js";import"./FieldDescription-cbN0tmKj.js";import"./index-DDs8vhkF.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./useControlledHostValueProps-H85_02BB.js";import"./TextField-U22TZmuN.js";import"./useTextField-W7kX8bZQ.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./ContextMenuSection-CSCUKvfx.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isDefaultOpen>
        <Heading>{dummyText.short}</Heading>
        <Content>
          <Section>
            {size === "s" && <Text>{dummyText.long}</Text>}
            {size === "m" && <TextField>
                <Label>{dummyText.short}</Label>
              </TextField>}

            <Button onPress={() => setSize(size === "s" ? "m" : "s")}>
              Change size
            </Button>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeModal>
            <Button color="accent">Create customer</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>;
  }
}`,...r.parameters?.docs?.source}}};const at=["SizeChange"];export{r as SizeChange,at as __namedExportsOrder,nt as default};
