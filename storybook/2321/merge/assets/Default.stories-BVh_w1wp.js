import{j as r}from"./iframe-BYq2oLvG.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-l8NPf1u4.js";import{L as m}from"./Link-TWxwANrT.js";import{H as s}from"./HeaderNavigation-BM3ajdNm.js";import{B as o}from"./Button-DnTJdD84.js";import{T as p}from"./Text-Df3o0vPg.js";import{I as h}from"./Image-HzjlkNP7.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BYmM3Hnr.js";import{C as M,M as c}from"./MenuItem-Cg2zzPGf.js";import{C as I}from"./ContextMenuTrigger-hZ5SnPfM.js";import"./ContextMenuSection-7fn1Gt6w.js";import{a as T,M as k}from"./Modal-BvQUl1nP.js";import{H}from"./Heading-CpBZdPdX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./remote-SGC31yDV.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./context-WfyLsYOo.js";import"./utils-Da-bhZeG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BosBzJqA.js";import"./usePress-CABccGP2.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./dynamic-bmDFV0NR.js";import"./LoadingSpinner-DIcYbI07.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk2CF5qa.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./useLabel-BBF67Bfk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CRRI-wfh.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Text-BsD4qVoX.js";import"./AlertIcon-DHHmiMC7.js";import"./ActionBatch-Bd-ykVKX.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./getActionGroupSlot-BbvszDVH.js";import"./Popover-BI0oaFz7.js";import"./useOverlayController-CI4A0ba3.js";import"./OverlayContextProvider-BMISrNul.js";import"./Dialog-DIAje18X.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";import"./Switch-DI0HvRd_.js";import"./useFieldComponent-C42pk4aC.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DOj64LJq.js";import"./useFormReset-COvJ3vzl.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./DialogTriggerView-DeSIkmGk.js";import"./Overlay-D24HTBly.js";import"./ButtonView-BKc5Ch31.js";import"./Flex-CiA8rnej.js";import"./Heading-CuMsOcSF.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
