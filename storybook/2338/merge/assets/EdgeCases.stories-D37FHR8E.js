import{r as s,j as o}from"./iframe-Bge_iwzq.js";import{M as n}from"./Modal-DEyfydXj.js";import{B as i}from"./Button-DYq5oiR6.js";import a from"./Default.stories-mCxmqadK.js";import{C as c}from"./Content-CuNOzgqd.js";import{S as d}from"./Section-F6_pDsCx.js";import{T as l}from"./Text-Bo3CKbUr.js";import{A as u}from"./ActionGroup-Cm9WLYvL.js";import{T as x}from"./TextField-BGSlbhXb.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-JLPBp959.js";import{A as h}from"./ActionBatch-AWhYHCSY.js";import{L as z}from"./Label-DsCIDP_n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./utils-rhPAe061.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./context-gG1Mi2B7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./Text-70WXc8nw.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./ModalTrigger-Bf4kukNj.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./DialogTriggerView-h-JMTVOn.js";import"./lib-BeG1oiUg.js";import"./ResetButton-B8dyUvel.js";import"./FieldError-D2SilRMV.js";import"./FieldError-Cv0VAgMN.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./ActionGroupView-DMVI4rfL.js";import"./useRef-C4wUjBhi.js";import"./browser-EEHoGSlH.js";import"./ColumnLayout-DR49IgRS.js";import"./AccentBox-DryT-gp_.js";import"./Radio-3tyucN9e.js";import"./useFieldComponent-DrAtnMqi.js";import"./useMakeFocusable-D6KSzyjC.js";import"./RadioGroup-UCIo66iv.js";import"./Form-YPyJtwoF.js";import"./useFormValidation-SyV8SqLU.js";import"./useFormReset-CAOi_S_S.js";import"./RadioButton-C4wZvYg1.js";import"./DatePicker-AZluRfwE.js";import"./DateInput-DlbpblW7.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useSpinButton-enwZH7VM.js";import"./useFilter-Cdd3kYxR.js";import"./Popover-DH8uNurD.js";import"./RangeCalendar-BrWLdppr.js";import"./Heading-DerjJN3d.js";import"./useUpdateEffect-iWhykU2_.js";import"./FieldDescription-CKLwRnm1.js";import"./index-DXL0ArLO.js";import"./EmulatedBoldText-D9nC6wju.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./TextField-Ctm0SVNE.js";import"./useTextField-4W-EXSfF.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-DLRBpctv.js";import"./ContextMenuSection-S8YrfSf7.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
