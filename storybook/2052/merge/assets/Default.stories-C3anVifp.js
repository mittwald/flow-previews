import{j as r}from"./iframe-CuPb25cv.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-CLSl9yKt.js";import{L as m}from"./Link-C-VKV--6.js";import{H as s}from"./HeaderNavigation-CECjkEQs.js";import{B as o}from"./Button-Cy_FSVpl.js";import{T as p}from"./Text-2_ekHeae.js";import{I as B}from"./Image-xEgwimNZ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C-cPwGfz.js";import{C as y,M as c}from"./MenuItem-CpxhC88D.js";import{C as A}from"./ContextMenuTrigger-C34LCqxf.js";import"./ContextMenuSection-D_Ue6SpG.js";import{a as D,M as E}from"./Modal-BZ5yTVrR.js";import{H as G}from"./Heading-DyK_r6HL.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./index-DkEiVX-f.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./utils-rjde634_.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./dynamic-CGQ0FoZ_.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./AlertIcon-CJtQpZ6u.js";import"./Action-CE7P3CGA.js";import"./context-B692btnM.js";import"./useStatic-BfPJwRSw.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./Popover-DSazfz_3.js";import"./useOverlayController-BcI7ttWx.js";import"./OverlayContextProvider-yb4dqhDz.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./Switch-D7KGUdZQ.js";import"./useFieldComponent-D7Smil9s.js";import"./react-children-utilities-OY5o0O78.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-ByjuM3xE.js";import"./useToggleState-B9BoubUu.js";import"./useFormReset-Cj0hiSlt.js";import"./OverlayTrigger-D5mv_HOJ.js";import"./ControlledNotification-DU2FrdIO.js";import"./DialogTriggerView-DC83a7Jo.js";import"./Overlay-CPPKcNB9.js";import"./ButtonView-D1KPplC5.js";import"./Heading-CSLfLI3i.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=e.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const io=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,io as __namedExportsOrder,to as default};
