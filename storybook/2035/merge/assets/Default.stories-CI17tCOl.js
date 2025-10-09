import{j as r}from"./iframe-CP5fTbjA.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-YasB_Ei3.js";import{L as m}from"./Link-DvfzK0RM.js";import{H as s}from"./HeaderNavigation-MrHiBpPU.js";import{B as o}from"./Button-LzGPdYwx.js";import{T as p}from"./Text-CHvdz95V.js";import{I as B}from"./Image-CFkM70j8.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-eN0_0E9B.js";import{C as y,M as c}from"./MenuItem-CIoeZeqy.js";import{C as A}from"./ContextMenuTrigger-BpdQBYRr.js";import"./ContextMenuSection-V-zZv8b3.js";import{a as D,M as E}from"./Modal-C1NY80GH.js";import{H as G}from"./Heading-BRj9pACc.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./index-DskZqzrG.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./context-pkC0B_Pd.js";import"./utils-D6GTtcOE.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./dynamic-e5X8hiwW.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BxAQ3I6S.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./Text-BAGiBnj-.js";import"./AlertIcon-Cv4p52bu.js";import"./Action-BkjzGa_I.js";import"./context-DXGAVSML.js";import"./useStatic-CBwN_HzY.js";import"./getActionGroupSlot-DggKykPy.js";import"./Popover-JrRBQobZ.js";import"./useOverlayController-DuEm9ptT.js";import"./OverlayContextProvider-DdAgShMM.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";import"./ClearPropsContextView-DhKx-WaR.js";import"./Switch-BVa03XyB.js";import"./useMakeFocusable-D5Xsb7wJ.js";import"./useToggleState-BWQchk9p.js";import"./useFormReset-B6af-x2Y.js";import"./OverlayTrigger-CR77EUIN.js";import"./ControlledNotification-r3JJBIQm.js";import"./DialogTriggerView-CR3n151M.js";import"./Overlay-p1Gb403j.js";import"./ButtonView-C0y12kRV.js";import"./Heading-6kSboyTb.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
